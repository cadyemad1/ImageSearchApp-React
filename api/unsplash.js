import axios from 'axios';

export default axios.create({
    baseURL:'https:///api.unsplash.com',
    headers:{
        Authorization: 'Client-ID e3f92866360ae29903f82f1e85d9f9b12e2db0f14dc898c1061ee941264ad100'
    }
});

