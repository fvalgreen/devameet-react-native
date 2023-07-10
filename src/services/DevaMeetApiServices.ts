import axios, {Method} from 'axios';
import {API_URL} from '@env';
import {store} from '../store';

const instance = axios.create({
  baseURL: API_URL,
  timeout: 30000,
});

export const api = async (
  endpoint: string,
  method: Method,
  body?: any,
  params?: any,
  newHeaders?: any,
) => {
  const token = store.getState().auth.token;
  let headers: any = newHeaders
    ? newHeaders
    : {'content-type': 'application/json'};
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  return instance.request({
    url: endpoint,
    method: method,
    data: body ? body : '',
    headers: headers,
    params: params,
  });
};

const post = async (endpoint: string, body: any, newHeaders?: any) => {
  return api(endpoint, 'POST', body, newHeaders);
};
const put = async (endpoint: string, body: any, newHeaders?: any) => {
  return api(endpoint, 'PUT', body, newHeaders);
};
const get = async (endpoint: string, params?: any, newHeaders?: any) => {
  return api(endpoint, 'GET', '', params, newHeaders);
};
const _delete = async (endpoint: string, params?: any, newHeaders?: any) => {
  return api(endpoint, 'DELETE', '', params, newHeaders);
};

export {post, get, put, _delete};
