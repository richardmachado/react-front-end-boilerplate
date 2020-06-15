import axios from 'axios';

// this should go in a utils folder, but i put it in Login folder since it belongs to login

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
   return axios.create({
        baseURL: '',
        headers: {
            Authorization: token
        }
    });
};