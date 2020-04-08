import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import AppContext from '../../context';
import logo from '../../assets/images/favpicture.svg';

class Header extends React.Component {
  state = { query: '' };

  componentDidMount() {
    const getUserData = async () => {
      try {
        const getLocation = await axios.get('https://geolocation-db.com/json/');
        const getWeather = await axios.get('https://api.weatherbit.io/v2.0/current', {
          params: {
            city: getLocation.data.city,
            key: '1524c3d025314a54b9222ff633f2b004',
          },
        });

        const userCountry = getLocation.data.country_name;
        const userWeather = getWeather.data.data[0].weather.description;

        this.setState({ query: `${userCountry} ${userWeather}` });
      } catch (e) {
        console.log(e); // eslint-disable-line no-console
      }
    };
    getUserData();
  }

  handleInputChange = (e) => {
    this.setState({ query: e.target.value });
  };

  render() {
    const data = this.state;

    return (
      <AppContext.Consumer>
        {(context) => (
          <div>
            <img src={logo} alt="" />
            <input
              type="text"
              value={data.query.toLowerCase()}
              onChange={this.handleInputChange}
              placeholder="fetching user data..."
            />
            <button onClick={() => context.onSearchSubmit(data.query)} type="button">
              get photos
            </button>
            <nav>
              <ul>
                <li>
                  <NavLink to="/">Recommended</NavLink>
                </li>
                <li>
                  <NavLink to="/favourites">Favourites</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Header;
