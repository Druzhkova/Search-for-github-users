import React from 'react';
import styled from 'styled-components';

export const Repository = ({ data }) => {
  const {
    name, description, html_url: url,
  } = data;

  return data
    ? (
      <Inner>
        <Link href={url} target="_blank">{name}</Link>
        <Description>{description}</Description>
      </Inner>
    )
    : null;
};

const Inner = styled.div`
  padding: 24px 30px; 
  margin-bottom: 25px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  border-radius: 6px;
  @media screen and (max-width: 760px) {
    padding: 12px 15px; 
    margin-bottom: 15px;
    font-size: 12px;
  }
`;

const Link = styled.a`
  margin-bottom: 15px;
  font-size: 24px;
  font-weight: 500;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 760px) {
    margin-bottom: 5px;
    font-size: 20px;
  }
`;

const Description = styled.span`
  font-size: 16px;
  font-weight: 400px;
`;
