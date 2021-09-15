import axios from 'axios';
// const BASE = 'http://127.0.0.1:8080/api';

const Request = axios.create({
  timeout: 5 * 1000,
  headers: {
    author: 'mock'
  }
});
Request.interceptors.request.use((config) => {
  return config;
});
Request.interceptors.response.use((res) => {
  const { status, data } = res;
  if (status === 200) {
    return data;
  }
  return { status, data: null, msg: '请求检查请求参数是否正确！' };
});
export default Request;
