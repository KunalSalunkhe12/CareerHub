import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("Profile")) {
    let profile = JSON.parse(localStorage.getItem("Profile"));
    console.log(profile.token);
    req.headers.Authorization = `Bearer ${profile.token}`;
  }
  return req;
});

export const signup = (userData) => API.post(`/user/signup`, userData);
export const signin = (userData) => API.post(`/user/signin`, userData);

export const getJob = (id, userId) =>
  API.get(`/job/get-job/${id}`, {
    params: {
      userId,
    },
  });
export const getJobs = (userId) => {
  return API.get(`/job/get-jobs`, {
    params: {
      userId,
    },
  });
};
export const newJob = (jobData, userId) =>
  API.post(`/job/new-job`, { jobData, userId });
export const updateJobStatus = (id, jobStatus) =>
  API.put(`/job/job-status/${id}`, { status: jobStatus });
export const deleteJob = (id) => API.delete(`/job/${id}`);

export const updateGuidance = (jobId, status, taskId, isCompleted) =>
  API.put(`/guidance/${jobId}`, { status, taskId, isCompleted });

export const updateChecklist = (jobId, status, taskId, isCompleted) =>
  API.put(`/checklist/${jobId}`, { status, taskId, isCompleted });

export const fetchPosts = () => API.get(`/posts`);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const createPost = (newPost) => API.post(`/posts`, newPost);

export const getTemplates = () => API.get(`/template`);

export const likePost = (id) => API.put(`/posts/${id}/like`, { id });
