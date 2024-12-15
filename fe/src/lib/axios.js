import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8000/api/',
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
    },
});

export default instance;