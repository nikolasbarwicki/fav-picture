import React from 'react';
import PropTypes from 'prop-types';
import Photo from '../../components/Photo/Photo';

const Recommended = ({ images }) => {
  return (
    <div>
      {images.map((image) => {
        return <Photo images={image} />;
      })}
    </div>
  );
};

Recommended.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Recommended;
