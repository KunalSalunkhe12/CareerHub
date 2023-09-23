import axios from 'axios';

const url = 'http://localhost:5000';

export const signup = (userData) => axios.post(`${url}/user/signup`, userData);
export const signin = (userData) => axios.post(`${url}/user/signin`, userData);

export const getJobs = () => axios.get(`${url}/job/get-jobs`);
export const newJob = (jobData) => axios.post(`${url}/job/new-job`, jobData);