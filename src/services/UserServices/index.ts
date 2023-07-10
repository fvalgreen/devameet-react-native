import {store} from '../../store';
import {Creators as AuthAction} from '../../store/reducers/AuthData';
import {Creators as UserAction} from '../../store/reducers/UserData';
import * as DevameetApiServices from '../DevaMeetApiServices';

const updateCurrentUser = async (token?: string) => {
  if (token) {
    store.dispatch(AuthAction.setToken(token));
  }

  const {data} = await DevameetApiServices.get('/user');
  store.dispatch(UserAction.setUser(data));
};

export {updateCurrentUser};
