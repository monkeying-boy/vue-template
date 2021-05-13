import axios from 'axios';

const ip = 'http://192.168.200.210:4000';

const Axios = axios.create({
  baseURL: ip,
  timeout: 5000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// 添加请求拦截器
Axios.interceptors.request.use((config) => {
  // 每次请求带上token
  const token = localStorage.getItem('token');
  token && (config.headers.Authorization = token);
  return config;
}, (error) => Promise.reject(error));

// 添加响应拦截器
Axios.interceptors.response.use((response) => {
  // 如果返回的状态码为200，说明接口请求成功
  if (response.status === 200) {
    return Promise.resolve(response);
  }
  return Promise.reject(response);
}, (error) => {
  const { status } = error.response;
  const msg = error.response.data.message;

  if (status) {
    // 根据不同状态码执行不同操作
    switch (status) {
      // 401: 未登录
      case 401:
        break;

        // 403 token过期
      case 403:
        console.log('403');
        // 清除token
        localStorage.removeItem('token');
        break;
        // 404请求不存在
      case 404:
        break;
      default:
        console.log(msg);
    }
  }
  return Promise.reject(error);
});

/**
 *
 * @param {*} url
 * @param {*} params
 * @returns
 */
const post = (url, params) => Axios.post(url, params);
const get = (url, params) => Axios.get(url, { params });

export {
  Axios,
  post,
  get,
};
