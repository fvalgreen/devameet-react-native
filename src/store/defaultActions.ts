import {Dispatch, bindActionCreators} from 'redux';
import {Creators as AuthActions} from './reducers/AuthData';
import {Creators as MessageActions} from './reducers/MessageData';
import {Creators as UserActions} from './reducers/UserData';

export const defaultActions = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      ...AuthActions,
      ...MessageActions,
      ...UserActions
    },
    dispatch,
  );
