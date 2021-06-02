import {
  GET_USER_DATA_REQUEST,
  getUserDataSuccess,
  getUserDataFailure,
  GET_LIST_REPOSITORIES_REQUEST,
  getListRepositoriesSuccess,
  getListRepositoriesFailure,
} from './actions';

export const userDataMiddleware = (store) => (next) => (action) => {
  if (action.type === GET_USER_DATA_REQUEST) {
    fetch(`https://api.github.com/users/${action.payload}`)
      .then((res) => res.json())
      .then((response) => store.dispatch(getUserDataSuccess(response)))
      .catch((error) => store.dispatch(getUserDataFailure(error)));
  }
  next(action);
};

export const listRepositoriesMiddleware = (store) => (next) => (action) => {
  if (action.type === GET_LIST_REPOSITORIES_REQUEST) {
    const { value, currentPage, perPage } = action.payload;

    fetch(`https://api.github.com/users/${value}/repos?sort=updated&per_page=${perPage}&page=${currentPage || 1}`)
      .then((res) => res.json())
      .then((response) => store.dispatch(getListRepositoriesSuccess(response)))
      .catch((error) => store.dispatch(getListRepositoriesFailure(error)));
  }
  next(action);
};
