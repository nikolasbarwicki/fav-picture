import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import AsyncCreatableSelect from 'react-select/async-creatable';

import AppContext from '../context';
import logo from '../assets/images/favpicture.svg';

const Wrapper = styled.div`
  padding: 0 8vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: 992px) {
    flex-direction: column;
    justify-content: center;
    height: 20vh;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 300px;
  padding-inline-start: 0;

  @media (max-width: 992px) {
    justify-content: space-evenly;
    width: 50vw;
  }

  @media (max-width: 768px) {
    justify-content: space-evenly;
    width: 80vw;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    text-align: center;
  }
`;

const NavItem = styled.li`
  list-style: none;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #000;
  font-size: 2.4rem;

  &.active {
    font-weight: 600;
  }
`;

const Input = styled(AsyncCreatableSelect)`
  width: 60rem;
  border: none;
  padding: 2rem;
  font-size: 2rem;
  font-family: 'Raleway', sans-serif;
  :focus {
    outline: none;
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`;

const Header = () => {
  const getUserData = async () => {
    const getLocation = await axios.get('https://geolocation-db.com/json/');
    const getWeather = await axios.get('https://api.weatherbit.io/v2.0/current', {
      params: {
        city: getLocation.data.city,
        key: '1524c3d025314a54b9222ff633f2b004',
      },
    });

    const userCountry = getLocation.data.country_name;
    const userCity = getLocation.data.city;
    const userWeather = getWeather.data.data[0].weather.description.toLowerCase();

    return [
      { value: userCountry, label: userCountry },
      { value: userCity, label: userCity },
      { value: userWeather, label: userWeather },
    ];
  };

  const promiseOptions = () => {
    return getUserData();
  };

  return (
    <AppContext.Consumer>
      {(context) => (
        <Wrapper>
          <img src={logo} alt="" />

          <Input
            isMulti
            cacheOptions
            defaultOptions
            loadOptions={promiseOptions}
            onChange={(value) =>
              value === null ? null : context.onSearchSubmit(value.map((el) => el.value).join(' '))
            }
            allowCreateWhileLoading
          />

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
};

export default Header;
