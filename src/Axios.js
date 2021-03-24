import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://backend.ustraa.com/rest/V1/api/'
});

Axios.defaults.headers.common['Content-Type'] = 'application/json';

export default Axios;