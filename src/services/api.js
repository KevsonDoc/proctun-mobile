import axios from 'axios';

const api = axios.create({
    baseURL: 'https://proctun.herokuapp.com'
})

export default api;