import React from 'react';
import PropTypes from 'prop-types';
import Photo from '../../components/Photo/Photo';

const Recommended = ({ images }) => {
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
          />
        );
      })}
    </div>
  );
};

Recommended.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Recommended;
