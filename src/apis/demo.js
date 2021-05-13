import { post } from '@/plugins/axios';

// eslint-disable-next-line import/prefer-default-export
export const doLogin = (params) => post('/user/doLogin.do', params);
