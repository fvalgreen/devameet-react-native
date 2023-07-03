import auth from './AuthData';
import {combineReducers} from 'redux';

const reducers = {
  auth,
};

export const Reducers = combineReducers(reducers);
