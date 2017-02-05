import axios from 'axios';
import {getApi} from 'utils/environment';

const AUTH_TOKEN = localStorage.getItem('token') || '';

axios.defaults.baseURL = getApi() || 'http://localhost:3090';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default axios;