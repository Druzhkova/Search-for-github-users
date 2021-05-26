import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './rootReducer';
import { userDataMiddleware, listRepositoriesMiddleware } from '../middleware';

export const store = createStore(rootReducer,
  composeWithDevTools(
    applyMiddleware(userDataMiddleware, listRepositoriesMiddleware),
  ));
