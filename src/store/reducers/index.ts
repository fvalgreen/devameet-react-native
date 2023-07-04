import auth from './AuthData';
import message from './MessageData';
import {combineReducers} from 'redux';

const reducers = {
  auth,
  message
};

export const Reducers = combineReducers(reducers);
