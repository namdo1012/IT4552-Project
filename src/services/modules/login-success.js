import {client} from '../client';

export default {
    getUser: payloads => client.get(`api/`,payloads),
};


