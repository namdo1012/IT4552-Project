import axios from 'axios';

const client = axios.create({
    baseURL : `https://randomuser.me/`,
});

export {client}
