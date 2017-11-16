import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-a93a7.firebaseio.com/'
});

export default instance;
