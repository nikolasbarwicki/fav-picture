import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';
import AppContext from '../../context';
import Favourites from '../Favourites/Favourites';
import Recommended from '../Recommended/Recommended';
import Header from '../../components/Header/Header';

class Root extends Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID DIvtES7bP4JvGhNePlCYIEBCqoetlGdqAnD68doTjVY',
      },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    const contextElements = {
      ...this.state,
      onSearchSubmit: this.onSearchSubmit,
    };

    const data = this.state;

    return (
      <AppContext.Provider value={contextElements}>
        <BrowserRouter>
          <Header />
          <Route exact path="/">
            <Recommended images={data.images} />
          </Route>
          <Route path="/favourites" component={Favourites} />
        </BrowserRouter>
      </AppContext.Provider>
    );
  }
}

export default Root;
