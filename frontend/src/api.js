// import axios from 'axios';

// // ✅ Change baseURL to your deployed backend
// const API = axios.create({
//   baseURL: 'https://newbookreccomendation-2.onrender.com/api'
// });


// export const signup = (data) => API.post('/auth/signup', data);
// export const login = (data) => API.post('/auth/login', data);
// export const getTopBooks = () => API.get('/books/top');
// export const getRecommendations = (user_input) => API.post('/books/recommend', { user_input });

// export const logout = async () => {
//   const response = await fetch('https://newbookreccomendation.onrender.com/api/logout', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   return response.json();
// };



import axios from 'axios';

// Base URL of your deployed Flask backend
const API = axios.create({
  baseURL: 'https://newbookreccomendation-2.onrender.com'
});

// Fetch top books (Flask root route)
export const getTopBooks = () => API.get('/');

// Fetch recommendations from Flask
export const getRecommendations = (user_input) =>
  API.post('/recommend_books', { user_input });

// If you also have Node backend auth routes, use another instance
const NODE_API = axios.create({
  baseURL: 'https://newbookreccomendation.onrender.com/api'
});

export const signup = (data) => NODE_API.post('/auth/signup', data);
export const login = (data) => NODE_API.post('/auth/login', data);
export const logout = async () => {
  const response = await NODE_API.post('/logout');
  return response.data;
};

