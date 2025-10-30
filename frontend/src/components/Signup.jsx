// // import React, { useState } from 'react';
// // import { signup } from '../api';
// // import { useNavigate } from 'react-router-dom';
// // import './Signup.css'; // import css

// // const Signup = () => {
// //   const [username, setUsername] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const navigate = useNavigate();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await signup({ username, email, password });
// //       navigate('/login');
// //     } catch (err) {
// //       alert(err.response.data.error);
// //     }
// //   };

// //   return (
// //     <div className="signup-container">
// //       <div className="signup-card">
// //         <h2>Signup</h2>
// //         <form onSubmit={handleSubmit}>
// //           <div className="input-group">
// //             <input 
// //               value={username} 
// //               onChange={e => setUsername(e.target.value)} 
// //               placeholder="Username" 
// //               required 
// //             />
// //             <label>Username</label>
// //           </div>
// //           <div className="input-group">
// //             <input 
// //               type="email" 
// //               value={email} 
// //               onChange={e => setEmail(e.target.value)} 
// //               placeholder="Email" 
// //               required 
// //             />
// //             <label>Email</label>
// //           </div>
// //           <div className="input-group">
// //             <input 
// //               type="password" 
// //               value={password} 
// //               onChange={e => setPassword(e.target.value)} 
// //               placeholder="Password" 
// //               required 
// //             />
// //             <label>Password</label>
// //           </div>
// //           <button type="submit">Signup</button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Signup;







// import React, { useState } from 'react';
// import { signup } from '../api';
// import { useNavigate, Link } from 'react-router-dom';
// import './Signup.css';

// const Signup = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       await signup({ username, email, password });
//       navigate('/login');
//     } catch (err) {
//       alert(err.response.data.error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="signup-container">
//       <div className="signup-card">
//         <h2>Sign Up</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="input-group">
//             <input 
//               value={username} 
//               onChange={e => setUsername(e.target.value)} 
//               placeholder=" "
//               required 
//             />
//             <label>Username</label>
//           </div>
//           <div className="input-group">
//             <input 
//               type="email" 
//               value={email} 
//               onChange={e => setEmail(e.target.value)} 
//               placeholder=" "
//               required 
//             />
//             <label>Email</label>
//           </div>
//           <div className="input-group">
//             <input 
//               type="password" 
//               value={password} 
//               onChange={e => setPassword(e.target.value)} 
//               placeholder=" "
//               required 
//             />
//             <label>Password</label>
//           </div>
//           <button type="submit" className={loading ? 'loading' : ''}>
//             {loading ? 'Signing Up...' : 'Sign Up'}
//           </button>
//         </form>
        
//         <div className="signup-links">
//           <p>Already have an account? <Link to="/login">Login</Link></p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;









import React, { useState } from 'react';
import { signup } from '../api';
import { useNavigate, Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Database mein signup
      await signup({ username, email, password });
      
      // LocalStorage mein bhi save karega profile ke liye
      const userData = {
        isLoggedIn: true,
        username: username,
        email: email
      };
      localStorage.setItem('bookhub_user', JSON.stringify(userData));
      
      // Login page par redirect
      navigate('/login');
    } catch (err) {
      alert(err.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input 
              value={username} 
              onChange={e => setUsername(e.target.value)} 
              placeholder=" "
              required 
            />
            <label>Username</label>
          </div>
          <div className="input-group">
            <input 
              type="email" 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              placeholder=" "
              required 
            />
            <label>Email</label>
          </div>
          <div className="input-group">
            <input 
              type="password" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              placeholder=" "
              required 
            />
            <label>Password</label>
          </div>
          <button type="submit" className={loading ? 'loading' : ''}>
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
        
        <div className="signup-links">
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;






// The above code is perfect


