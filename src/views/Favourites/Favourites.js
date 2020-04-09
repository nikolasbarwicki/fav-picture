import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Photo from '../../components/Photo/Photo';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 400px);
  grid-gap: 50px;
  justify-content: center;
  width: 100%;
`;

const Favourites = ({ images }) => {
  return (
    <Wrapper>
      {images.map((image) => {
        return (
          <Photo
            author={image.author}
            url={image.url}
            tags={image.tags}
            key={image.url}
            alt={image.alt}
            del
          />
        );
      })}
    </Wrapper>
  );
};

Favourites.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Favourites;
