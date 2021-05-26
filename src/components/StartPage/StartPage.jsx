import React from 'react';
import styled from 'styled-components';
import { startSearchIcon } from '../../assets/index';

export const StartPage = () => (
  <Inner>
    <img src={startSearchIcon} alt="Search" />
    <Text>
      Start with searching
      <br />
      a GitHub user
    </Text>
  </Inner>
);

const Inner = styled.div`
  height: calc(100vh - 76px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  font-size: 22px;
  text-align: center;
  color: #808080;
`;
