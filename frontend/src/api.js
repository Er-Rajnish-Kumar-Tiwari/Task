// src/api.js
import axios from 'axios';

// Use your Render deployment base URL
const API = axios.create({ baseURL: 'https://task-d0eq.onrender.com' });

//  Automatically attach token to all requests
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

//  Auth APIs
export const signup = (userData) => API.post('/auth/signup', userData);
export const login = (userData) => API.post('auth/login', userData);

//  Task APIs
export const fetchTasks = () => API.get('/tasks');
export const addTask = (task) => API.post('/tasks', task);
