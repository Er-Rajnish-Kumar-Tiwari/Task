// api.js
import axios from 'axios';

const API = axios.create({ baseURL: 'https://task-d0eq.onrender.com/api' });

API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export const signup = (userData) => API.post('/auth/signup', userData);
export const login = (userData) => API.post('/auth/login', userData);
export const fetchTasks = () => API.get('/tasks');
export const addTask = (task) => API.post('/tasks', task);
