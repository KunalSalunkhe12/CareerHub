import axios from 'axios';

const url = 'http://localhost:5000';

export const signup = (formData) => axios.post(`${url}/user/signup`, formData);
export const signin = (formData) => axios.post(`${url}/user/signin`, formData);