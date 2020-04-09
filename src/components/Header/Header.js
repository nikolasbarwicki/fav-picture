import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
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

    const Wrapper = styled.div`
      padding: 0 8vw;
      height: 10vh;
      display: flex;
      align-items: center;
      justify-content: space-between;
    `;

    const NavList = styled.ul`
      display: flex;
    `;

    const NavItem = styled.li`
      list-style: none;
    `;

    const StyledNavLink = styled(NavLink)`
      text-decoration: none;
      color: #000;
      font-size: 2.4rem;
      margin-left: 4rem;
      &.active {
        font-weight: 600;
      }
    `;

    const Input = styled.input`
      height: 5rem;
      width: 40rem;
      border: none;
      padding: 2rem;
      font-size: 2rem;
      font-family: 'Raleway', sans-serif;
      :focus {
        outline: none;
      }
    `;

    const Button = styled.button`
      height: 5rem;
      width: 5rem;
      font-size: 2rem;
      background-color: #fff;
      border: none;
      cursor: pointer;
      :focus {
        outline: none;
      }
    `;

    return (
      <AppContext.Consumer>
        {(context) => (
          <Wrapper>
            <img src={logo} alt="" />

            <div>
              <Input
                type="text"
                value={data.query}
                onChange={this.handleInputChange}
                placeholder="fetching user data..."
              />
              <Button onClick={() => context.onSearchSubmit(data.query)} type="button">
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </div>
            <nav>
              <NavList>
                <NavItem>
                  <StyledNavLink exact to="/">
                    recommended
                  </StyledNavLink>
                </NavItem>
                <NavItem>
                  <StyledNavLink to="/favourites">favourites</StyledNavLink>
                </NavItem>
              </NavList>
            </nav>
          </Wrapper>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Header;
