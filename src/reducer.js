import {
  GET_USER_DATA_REQUEST,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_FAILURE,
  GET_LIST_REPOSITORIES_REQUEST,
  GET_LIST_REPOSITORIES_SUCCESS,
  GET_LIST_REPOSITORIES_FAILURE,
  CHANGE_CURRENT_PAGE,
} from './actions';

const initialState = {
  userData: null,
  loading: false,
  errorMessage: null,
  maxResults: 20,
  repositoriesData: null,
  loadingRepositories: false,
  currentPage: 1,
  perPage: 5,
  totalCount: 0,
};

export function serchAppReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_DATA_SUCCESS: {
      return {
        ...state,
        userData: action.payload,
        totalCount: action.payload.public_repos,
        currentPage: 1,
        loading: false,
      };
    }

    case GET_USER_DATA_REQUEST: {
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    }

    case GET_USER_DATA_FAILURE: {
      return {
        ...state,
        errorMessage: action.payload,
        loading: false,
      };
    }

    case GET_LIST_REPOSITORIES_SUCCESS: {
      return {
        ...state,
        repositoriesData: action.payload,
        loadingRepositories: false,
      };
    }

    case GET_LIST_REPOSITORIES_REQUEST: {
      return {
        ...state,
        loadingRepositories: true,
        errorMessage: null,
      };
    }

    case GET_LIST_REPOSITORIES_FAILURE: {
      return {
        ...state,
        errorMessage: action.payload,
        loadingRepositories: false,
      };
    }

    case CHANGE_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.payload,
      };
    }

    default: return state;
  }
}
