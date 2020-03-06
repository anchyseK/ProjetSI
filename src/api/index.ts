import axios from 'axios';

const connection = axios.create({
    baseURL: 'http://obiwan2.univ-brest.fr:8146'
})

export default connection
