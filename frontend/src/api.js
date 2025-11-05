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

const API = axios.create({
  baseURL: 'https://newbookreccomendation-2.onrender.com' // deployed Flask backend
});

export const signup = (data) => API.post('/auth/signup', data); // if auth exists
export const login = (data) => API.post('/auth/login', data);   // if auth exists

// Correct endpoints for deployed Flask backend
export const getTopBooks = () => API.get('/');  // top books
export const getRecommendations = (user_input) => 
    API.post('/recommend_books', { user_input });

export const logout = async () => {
  const response = await fetch('https://newbookreccomendation-2.onrender.com/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  return response.json();
};
