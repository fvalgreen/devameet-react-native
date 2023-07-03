import {IAuth} from './Auth';

interface IStoreAuth extends IAuth {}

export interface IStore {
  auth: IStoreAuth;
}
