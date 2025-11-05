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

// import axios from 'axios';

// // Use your Render backend URL
// const API = axios.create({
//   baseURL: 'https://newbookreccomendation-2.onrender.com'  // backend URL
// });

// // ✅ Auth APIs
// export const signup = (data) => API.post('/auth/signup', data);
// export const login = (data) => API.post('/auth/login', data);

// // ✅ Book APIs
// export const getTopBooks = () => API.get('/');  // Your Flask app '/' route returns top books
// export const getRecommendations = (user_input) => 
//   API.post('/recommend_books', { user_input });

// // ✅ Logout
// export const logout = async () => {
//   const response = await fetch(`${API.defaults.baseURL}/logout`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//   });
//   return response.json();
// };


import axios from 'axios';

// Base URL of your deployed Flask backend
const API = axios.create({
  baseURL: 'https://newbookreccomendation-2.onrender.com', // replace with your backend URL
});

// ===== Auth APIs =====
export const signup = (data) => API.post('/auth/signup', data);
export const login = (data) => API.post('/auth/login', data);

// ===== Book APIs =====
export const getTopBooks = () => API.get('/books/top'); // match app.py
export const getRecommendations = (user_input) =>
  API.post('/books/recommend', { user_input });

// ===== Logout (optional) =====
export const logout = async () => {
  localStorage.removeItem('bookhub_user'); // remove local user data
  return { message: 'Logged out' };
};






