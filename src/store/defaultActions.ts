import {Dispatch, bindActionCreators} from 'redux';
import {Creators as AuthActions} from './reducers/AuthData';

export const defaultActions = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      ...AuthActions,
    },
    dispatch,
  );
