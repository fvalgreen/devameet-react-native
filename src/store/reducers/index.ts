import auth from './AuthData';
import message from './MessageData';
import user from './UserData';
import {combineReducers} from 'redux';

const reducers = {
  auth,
  message,
  user,
};

export const Reducers = combineReducers(reducers);
