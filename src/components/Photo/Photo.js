import React from 'react';

const Photo = (props) => {
  const {
    images: {
      user: { name },
      urls: { small },
    },
  } = props;

  return (
    <div>
      <button type="button">Add to favs</button>
      <p>{name}</p>
      <img src={small} alt="" />
    </div>
  );
};

export default Photo;
