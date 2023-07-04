import {Dispatch, bindActionCreators} from 'redux';
import {Creators as AuthActions} from './reducers/AuthData';
import {Creators as MessageActions} from './reducers/MessageData';

export const defaultActions = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      ...AuthActions,
      ...MessageActions
    },
    dispatch,
  );
