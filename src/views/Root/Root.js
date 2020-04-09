import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';
import AppContext from '../../context';
import Favourites from '../Favourites/Favourites';
import Recommended from '../Recommended/Recommended';
import Header from '../../components/Header/Header';

class Root extends Component {
  state = { images: [], favourites: [] };

  onSearchSubmit = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term, per_page: 6 },
      headers: {
        Authorization: 'Client-ID DIvtES7bP4JvGhNePlCYIEBCqoetlGdqAnD68doTjVY',
      },
    });

    const imagesList = response.data.results.map((el) => {
      return { url: el.urls.regular, author: el.user.name, alt: el.alt_description, tags: term };
    });

    this.setState({ images: [...imagesList] });
  };

  addToFavourites = (url, author, alt, tags) => {
    this.setState({ favourites: [{ url, author, alt, tags }] });
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
          <Header />
          <Route exact path="/">
            <Recommended images={data.images} />
          </Route>
          <Route path="/favourites">
            <Favourites images={data.favourites} />
          </Route>
        </BrowserRouter>
      </AppContext.Provider>
    );
  }
}

export default Root;
