import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });
export const signup = (data) => API.post('/auth/signup', data);
export const login = (data) => API.post('/auth/login', data);
export const getTopBooks = () => API.get('/books/top');
export const getRecommendations = (user_input) => API.post('/books/recommend', { user_input });

export const logout = async () => {
  // Your logout API call
  const response = await fetch('/api/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};

