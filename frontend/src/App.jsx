import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Recommend from "./components/Recommend";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import Favorites from "./components/Favorites";


function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recommend" element={<Recommend />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
         <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <Footer /> {/* Footer ko Routes ke andar ya baad me wrap karna hai */}
    </div>
  );
  
}

export default App;

