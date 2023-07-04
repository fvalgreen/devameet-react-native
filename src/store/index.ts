import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import {Reducers} from './reducers';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

const persistConfig = {
  key: 'devameet',
  storage: AsyncStorage,
  whiteList: ['auth', 'message'],
};

const persistedReducer = persistReducer(persistConfig, Reducers);

export const store = createStore(persistedReducer, applyMiddleware(ReduxThunk));

export const persistor = persistStore(store);
