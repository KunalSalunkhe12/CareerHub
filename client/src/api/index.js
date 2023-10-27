import axios from 'axios';

const url = 'http://localhost:5000';

export const signup = (userData) => axios.post(`${url}/user/signup`, userData);
export const signin = (userData) => axios.post(`${url}/user/signin`, userData);

export const getJob = (id) => axios.get(`${url}/job/get-job/${id}`);
export const getJobs = () => axios.get(`${url}/job/get-jobs`);
export const newJob = (jobData) => axios.post(`${url}/job/new-job`, jobData);
export const updateJobStatus = (id, jobStatus) => axios.put(`${url}/job/job-status/${id}`, { status: jobStatus });

export const getGuidance = (status) => axios.get(`${url}/guidance/${status}`);
export const updateGuidance = (status, taskId, isCompleted) => axios.put(`${url}/guidance`, { status, taskId, isCompleted });

export const getChecklist = () => axios.get(`${url}/checklist`);
export const updateChecklist = (status, taskId, isCompleted) => axios.put(`${url}/checklist`, { status, taskId, isCompleted });