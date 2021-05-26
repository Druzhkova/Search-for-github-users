import { combineReducers } from 'redux';
import { serchAppReducer } from '../reducer';

export const rootReducer = combineReducers({ searchApp: serchAppReducer });
