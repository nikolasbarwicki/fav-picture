import React from 'react';
import PropTypes from 'prop-types';
import Grid from '../components/Grid';
import Photo from '../components/Photo';

const Recommended = ({ images }) => {
  return (
    <Grid>
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
    </Grid>
  );
};

Recommended.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Recommended;
