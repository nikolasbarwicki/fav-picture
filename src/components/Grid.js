import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 90%;
  margin: 0 auto;
  grid-gap: 50px;
  justify-content: center;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Grid = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Grid;
