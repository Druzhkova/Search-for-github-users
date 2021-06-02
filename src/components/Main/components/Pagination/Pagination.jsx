import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { createPages } from '../../../../utils/createPages';
import { changeCurrentPage, getListRepositoriesRequest } from '../../../../actions';

export const Pagination = ({ value }) => {
  const dispatch = useDispatch();

  const {
    perPage,
    currentPage,
    totalCount,
  } = useSelector((state) => state.searchApp);

  const pagesCount = Math.ceil(totalCount / perPage);
  const pages = [];

  createPages(pages, pagesCount, currentPage);

  const getRepositories = (page) => {
    dispatch(changeCurrentPage(page));
    dispatch(getListRepositoriesRequest({
      value,
      currentPage: page,
      perPage,
    }));
  };

  const lastNumber = perPage * currentPage;
  const firstNumber = lastNumber - (perPage - 1);
  return (
    <Inner>
      <span>
        {`${firstNumber} - ${lastNumber > totalCount
          ? totalCount : lastNumber} of ${totalCount} items`}
      </span>
      <Arrow
        onClick={() => {
          if (currentPage === 1) {
            getRepositories(currentPage);
          } else {
            getRepositories(currentPage - 1);
          }
        }}
      >
        &#10094;
      </Arrow>
      {
      pages.map((page, index) => (
        <NumberPage
          key={index}
          background={currentPage === page ? '#0064EB' : '#F9F9F9'}
          onClick={() => getRepositories(page)}
        >
          {page}
        </NumberPage>
      ))
    }
      <Arrow
        onClick={() => {
          if (currentPage === pagesCount) {
            getRepositories(pagesCount);
          } else {
            getRepositories(currentPage + 1);
          }
        }}
      >
        &#10095;

      </Arrow>
    </Inner>
  );
};

const Inner = styled.div`
  color: #808080;
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 auto 30px;
`;

const Arrow = styled.span`
  font-size: 14px;
  margin: 0 10px;
  cursor: pointer;
  &:hover {
    color: #0064EB;
  }
`;

const NumberPage = styled.div`
  width: 21px;
  height: 25px;
  font-size: 14px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  background: ${(props) => props.background};
  color: ${(props) => (props.background === '#0064EB'
    ? '#ffffff'
    : '#808080')};
  border-radius: 3px;
  cursor: pointer;
`;
