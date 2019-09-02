import axios from 'axios';

const api = axios.create({ baseURL: 'https://hocketseat-node.herokuapp.com/api' });

export default api;