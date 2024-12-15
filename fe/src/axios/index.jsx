import axios from "axios";

const request = axios.create({
    baseUrl: 'http://api.eklaim.com'
});

export default request;