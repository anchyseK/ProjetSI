import axios from 'axios';

const connection = axios.create({
    baseURL: 'http://obiwan2.univ-brest.fr:7937'
})

export default connection
