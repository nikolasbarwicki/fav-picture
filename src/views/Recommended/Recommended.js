import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Photo from '../../components/Photo/Photo';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 25%);
  grid-gap: 50px;
  justify-content: center;
  width: 100%;
`;

const Recommended = ({ images }) => {
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
          />
        );
      })}
    </Wrapper>
  );
};

Recommended.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Recommended;
