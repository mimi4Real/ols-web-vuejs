import Axios from 'axios'
import storeBase from '../store'



const service = Axios.create({
  timeout: 150000,
});

service.interceptors.request.use((config) => {
  config.headers['Authorization'] = storeBase.state.user.token;
  return config;
}, (error) => {
  Promise.reject(error);
});

// respone拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    return res;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default service;
