import React from 'react';
import styled from 'styled-components';
import { empty } from '../../assets/index';
import { Pagination, UserData } from './components';

export const Main = ({
  children, data, value, perPage,
}) => (
  <>
    <Inner>
      <UserData data={data} />
      {data.public_repos === 0
        ? (
          <EmptySection>
            <img src={empty} alt="No repositories found" />
            <Text>
              Repository list is empty
            </Text>
          </EmptySection>
        )
        : (
          <Repositories>
            <Title>
              Repositories
              {' '}
              <span>
                (
                {data.public_repos}
                )
              </span>
            </Title>
            {children}
          </Repositories>
        )}
    </Inner>
    {data.public_repos <= perPage
      ? null
      : <Pagination value={value} />}
  </>
);

const Inner = styled.main`
  margin: 0 auto;
  padding: 40px 0px 25px 0px;
  width: 95%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 760px) {
    padding: 15px 0px;
    flex-direction: column;
    justify-content: center;
  }
`;

const EmptySection = styled.div`
  width: 100%;
  height: calc(100vh - 200px);
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

const Repositories = styled.section`
  width: 100%;
  &:first-child {
    border-top: none;
  }
`;

const Title = styled.h3`
  margin: 0 0 30px 0;
  padding: 0;
  font-size: calc(25px + 0.5vw);
  font-weight: 600;
  @media screen and (max-width: 760px) {
    padding: 0 0 0 30px;
    margin-bottom: 15px;
  }
`;
