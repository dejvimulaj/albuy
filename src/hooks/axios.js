import axios from 'axios'

export default axios.create({
    baseURL:'http://localhost:5173'
});

export const axiosPrivate =axios.create({
    baseURL:'http://localhost:5173'
});