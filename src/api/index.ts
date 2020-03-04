import axios from 'axios';

const connection = axios.create({
    baseURL: 'http://obiwan2.univ-brest.fr:8237'
})

export default connection
