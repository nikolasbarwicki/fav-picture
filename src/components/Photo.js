import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';

import AppContext from '../context';

const Tags = styled.p`
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 0.5rem 1.5rem;
  border-radius: 3rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -80%);
  text-transform: lowercase;
  font-size: 2.4rem;
  color: #fff;
  transition: opacity 0.3s ease;
  text-align: center;
`;

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  &:hover ${Tags} {
    display: block;
    opacity: 1;
  }
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const Button = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  height: 4rem;
  width: 4rem;
  font-size: 2rem;
  background-color: rgba(0, 0, 0, 0.3);
  font-size: 1.6rem;
  color: #fff;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  :focus {
    outline: none;
  }
  :active {
    color: red;
  }
`;

const Author = styled.p`
  display: block;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 0.5rem 1.5rem;
  border-radius: 3rem;
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-size: 1.6rem;
  color: #fff;
`;

const Photo = ({ author, url, tags, alt, del }) => {
  return (
    <AppContext.Consumer>
      {(context) => (
        <Wrapper>
          <Button
            type="button"
            onClick={
              del
                ? () => context.delFromFavourites(url)
                : () => context.addToFavourites(url, author, alt, tags)
            }
          >
            {del ? <FontAwesomeIcon icon={faTrash} /> : <FontAwesomeIcon icon={faHeart} />}
          </Button>
          <Author>{author}</Author>
          {del ? <Tags>Tags: {tags}</Tags> : null}
          <Image src={url} alt={alt} />
        </Wrapper>
      )}
    </AppContext.Consumer>
  );
};

export default Photo;
