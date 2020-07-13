import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';
import AppContext from '../context';
import Favourites from './Favourites';
import Recommended from './Recommended';
import Header from '../components/Header';
import GlobalStyle from '../Theme/GlobalStyle';

class Root extends Component {
  state = { images: [], favourites: [] };

  onSearchSubmit = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term, per_page: 6, orientation: 'landscape' },
      headers: {
        Authorization: 'Client-ID DIvtES7bP4JvGhNePlCYIEBCqoetlGdqAnD68doTjVY',
      },
      timeout: 1000,
    });

    const imagesList = response.data.results.map((el) => {
      return { url: el.urls.regular, author: el.user.name, alt: el.alt_description, tags: term };
    });

    this.setState({ images: [...imagesList] });
  };

  addToFavourites = (url, author, alt, tags) => {
    this.setState((prevState) => ({
      favourites: [...prevState.favourites, { url, author, alt, tags }],
    }));
  };

  delFromFavourites = (url) => {
    this.setState((prevState) => ({
      favourites: [...prevState.favourites.filter((el) => el.url !== url)],
    }));
  };

  render() {
    const contextElements = {
      ...this.state,
      onSearchSubmit: this.onSearchSubmit,
      addToFavourites: this.addToFavourites,
      delFromFavourites: this.delFromFavourites,
    };

    const data = this.state;

    return (
      <AppContext.Provider value={contextElements}>
        <BrowserRouter>
          <GlobalStyle />
          <Header />
          <Route exact path="/">
            <Recommended images={data.images} />
          </Route>
          <Route exact path="/favourites">
            <Favourites images={data.favourites} />
          </Route>
        </BrowserRouter>
      </AppContext.Provider>
    );
  }
}

export default Root;
