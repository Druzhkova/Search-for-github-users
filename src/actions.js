export const GET_USER_DATA_REQUEST = 'GET_USER_DATA_REQUEST';
export const GET_USER_DATA_SUCCESS = 'GET_USER_DATA_SUCCESS';
export const GET_USER_DATA_FAILURE = 'GET_USER_DATA_FAILURE';

export const GET_LIST_REPOSITORIES_REQUEST = 'GET_LIST_REPOSITORIES_REQUEST';
export const GET_LIST_REPOSITORIES_SUCCESS = 'GET_LIST_REPOSITORIES_SUCCESS';
export const GET_LIST_REPOSITORIES_FAILURE = 'GET_LIST_REPOSITORIES_FAILURE';

export const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';

export function getUserDataRequest(query) {
  return {
    type: GET_USER_DATA_REQUEST,
    payload: query,
  };
}

export function getUserDataSuccess(data) {
  return {
    type: GET_USER_DATA_SUCCESS,
    payload: data,
  };
}

export function getUserDataFailure(error) {
  return {
    type: GET_USER_DATA_FAILURE,
    payload: error,
  };
}

export function getListRepositoriesRequest(query) {
  return {
    type: GET_LIST_REPOSITORIES_REQUEST,
    payload: query,
  };
}

export function getListRepositoriesSuccess(data) {
  return {
    type: GET_LIST_REPOSITORIES_SUCCESS,
    payload: data,
  };
}

export function getListRepositoriesFailure(error) {
  return {
    type: GET_LIST_REPOSITORIES_FAILURE,
    payload: error,
  };
}

export function changeCurrentPage(page) {
  return {
    type: CHANGE_CURRENT_PAGE,
    payload: page,
  };
}
