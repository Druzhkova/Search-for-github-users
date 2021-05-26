import React from 'react';
import styled from 'styled-components';
import { iconFollowing, iconFollowers } from '../../../../assets/index';

export const UserData = ({ data }) => {
  const {
    avatar_url: avatar, name, login, followers, following, html_url: url,
  } = data;

  return (
    <StyledUserData>
      <Img
        src={avatar}
        alt="Avatar"
      />
      <Inner>
        <Name>{name}</Name>
        <Link
          href={url}
          target="_blank"
        >
          {login}
        </Link>
        <div>
          <Span>
            <Icon
              src={iconFollowers}
              alt="Followers"
            />
            {' '}
            {followers}
            {' '}
            followers
          </Span>
          {' '}
          <Span>
            <Icon
              src={iconFollowing}
              alt="Following"
            />
            {' '}
            {following}
            {' '}
            following
          </Span>
        </div>
      </Inner>
    </StyledUserData>
  );
};

const StyledUserData = styled.div`
  margin-right: 5vw;
  max-width: 290px;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 760px) {
    margin-right: 0;
    max-width: 760px;
    flex-direction: row;
    align-items: center;
  }
`;

const Img = styled.img`
  max-width: 280px;
  width: 100%;
  object-fit: cover;
  object-position: 0 10%;
  border-radius: 50%;
  @media screen and (max-width: 760px) {
    width: 140px;
    height: 140px;
    margin-right: 5vw;
  }
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (max-width: 760px) {
    margin-bottom: 30px;
  }
`;

const Name = styled.h1`
  font-size: 26px;
  @media screen and (max-width: 760px) {
    margin-bottom: 15px;
    font-size: 22px;
  }
`;

const Link = styled.a`
  text-decoration: none;
  font-size: 18px;
  margin-bottom: 25px;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 760px) {
    margin-bottom: 15px;
  }
`;

const Span = styled.span`
  &:first-child {
    margin-right: 15px;
  }

  @media screen and (max-width: 480px) {
    display: block;
    font-size: 14px;
    &:first-child {
      margin-right: 0;
    }
  }
`;

const Icon = styled.img`
  height: 14px;
  @media screen and (max-width: 760px) {
    height: 12px;
  }
`;
