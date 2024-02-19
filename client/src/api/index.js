import axios from "axios";

const url = "http://localhost:5000";

export const signup = (userData) => axios.post(`${url}/user/signup`, userData);
export const signin = (userData) => axios.post(`${url}/user/signin`, userData);

export const getJob = (id, userId) =>
  axios.get(`${url}/job/get-job/${id}`, {
    params: {
      userId,
    },
  });
export const getJobs = (userId) => {
  return axios.get(`${url}/job/get-jobs`, {
    params: {
      userId,
    },
  });
};
export const newJob = (jobData, userId) =>
  axios.post(`${url}/job/new-job`, { jobData, userId });
export const updateJobStatus = (id, jobStatus) =>
  axios.put(`${url}/job/job-status/${id}`, { status: jobStatus });
export const deleteJob = (id) => axios.delete(`${url}/job/${id}`);

export const getGuidance = (status) => axios.get(`${url}/guidance/${status}`);
export const updateGuidance = (jobId, guidanceData) =>
  axios.put(`${url}/guidance/${jobId}`, { guidanceData });

export const getChecklist = () => axios.get(`${url}/checklist`);
export const updateChecklist = (status, taskId, isCompleted) =>
  axios.put(`${url}/checklist`, { status, taskId, isCompleted });

export const fetchPosts = () => axios.get(`${url}/posts`);

export const createPost = (newPost) => axios.post(`${url}/posts`, newPost);
