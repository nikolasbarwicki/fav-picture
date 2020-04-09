import React from 'react';
import AppContext from '../../context';

const Photo = ({ author, url, tags, alt, del }) => {
  return (
    <AppContext.Consumer>
      {(context) => (
        <div>
          <button
            type="button"
            onClick={
              del
                ? () => context.delFromFavourites(url)
                : () => context.addToFavourites(url, author, alt, tags)
            }
          >
            {del ? 'Delete' : 'Add to favs'}
          </button>
          <p>{author}</p>
          <p>{del ? tags : null}</p>
          <img src={url} alt={alt} />
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default Photo;
