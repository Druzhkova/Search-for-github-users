import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import ReactLoading from 'react-loading';
import { getListRepositoriesRequest, getUserDataRequest } from './actions';
import {
  Header, Main, StartPage, NotFound, Repository,
} from './components';

function App() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const {
    userData,
    repositoriesData: listRepositories,
    perPage,
    currentPage,
    loading,
  } = useSelector((state) => state.searchApp);

  const getData = useCallback(() => {
    dispatch(getListRepositoriesRequest({ value, currentPage, perPage }));
    dispatch(getUserDataRequest(value));
  }, [dispatch, value, currentPage, perPage]);

  return (
    <>
      <Header
        value={value}
        setValue={setValue}
        getData={getData}
      />
      {loading
        ? (
          <Loading>
            <ReactLoading
              type="spokes"
              color="grey"
              height={100}
              width={100}
            />
          </Loading>
        )
        : (
          <Inner>
            {(userData && userData.message === 'Not Found')
              ? <NotFound />
              : userData
                ? (
                  <Main
                    data={userData}
                    value={value}
                    perPage={perPage}
                  >
                    {
                    listRepositories && !listRepositories.message
                      ? listRepositories.map((data) => <Repository key={data.id} data={data} />)
                      : null
                  }
                  </Main>
                )
                : <StartPage />}
          </Inner>
        )}
    </>
  );
}

const Inner = styled.div`
  height: calc(100vh - 76px);
  margin: 0 auto;
  max-width: 1366px;
  height: 100%;
`;

const Loading = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default App;
