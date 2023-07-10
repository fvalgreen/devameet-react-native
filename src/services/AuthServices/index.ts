import {ILogin} from '../../models/Auth';
import * as DevameetApiServices from '../DevaMeetApiServices';
import {updateCurrentUser} from '../UserServices';

const login = async (body: ILogin) => {
  const {data} = await DevameetApiServices.post('/auth/login', body);
  await updateCurrentUser(data.token);
};

export {login};
