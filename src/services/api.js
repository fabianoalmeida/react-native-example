import axios from 'axios';

const api = axios.create({
  baseURL: 'http://8k-izb.anonymous.mobile.exp.direct:80'
});

export default api;