import React from 'react';
import PropTypes from 'prop-types';
import Photo from '../../components/Photo/Photo';

const Favourites = ({ images }) => {
  return (
    <div>
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
    </div>
  );
};

Favourites.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Favourites;
