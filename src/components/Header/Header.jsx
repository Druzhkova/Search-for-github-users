import React, { useCallback } from 'react';
import styled from 'styled-components';
import {
  logo, iconSearch,
} from '../../assets/index';

export const Header = ({ setValue, value, getData }) => {
  const onChangeText = useCallback((event) => {
    setValue(event.target.value);
  }, [setValue]);

  const search = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <StyledHeader>
      <Inner>
        <Link href="/index.html">
          <Logo
            src={logo}
            alt="Logo"
          />
        </Link>
        <Form onSubmit={search}>
          <StyledButton onClick={getData}>
            <img
              src={iconSearch}
              alt="Search"
            />
          </StyledButton>
          <StyledInput
            onChange={onChangeText}
            value={value}
            placeholder="Enter username"
          />
        </Form>
      </Inner>
    </StyledHeader>
  );
};

const Inner = styled.div`
  max-width: 1366px;
  padding: 16px 10px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  @media screen and (max-width: 330px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const StyledHeader = styled.header`
  width: 100%;
  margin: 0 auto;
  background: #0064EB;
`;

const Logo = styled.img`
  margin-right: 20px;
  @media screen and (max-width: 330px) {
    margin-right: 0;
  }
`;

const Form = styled.form`
  max-width: 500px;
  width: 100%;
  height: 40px;
  display: flex;
  flex-grow: 1;
  border-radius: 6px;
`;

const StyledInput = styled.input`
  width: 100%;
  font-size: 14px;
  padding: 0 10px 0 0;
  border: none;
  border-radius: 6px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  outline: none;
`;

const StyledButton = styled.button`
  padding: 0 10px 0 20px;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 6px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  cursor: pointer;
  outline: none;
  border: none;
  &:active, 
  &:focus,
  &:hover {
    outline: none;
  }
`;

const Link = styled.a`
  @media screen and (max-width: 330px) {
    margin-bottom: 13px;
  }
`;
