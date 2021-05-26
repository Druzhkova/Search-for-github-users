import React from 'react';
import styled from 'styled-components';
import { notFound } from '../../assets/index';

export const NotFound = () => (
  <Inner>
    <img src={notFound} alt="Not found" />
    <Text>
      User not found
    </Text>
  </Inner>
);

const Inner = styled.div`
  height: calc(100vh - 76px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  font-size: 22px;
  text-align: center;
  color: #808080;
`;
