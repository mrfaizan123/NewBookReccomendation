import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  // Check if link is active
  const isActive = (path) => location.pathname === path;

  return (
    <footer className="footer">
      <div className="footer-waves">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
      </div>
      
      <div className="footer-container">
        {/* LEFT SIDE - BRAND */}
        <div className="footer-left">
          <div className="footer-logo">
            <span className="logo-icon">📚</span>
            <h3 className="brand-name">BookHub</h3>
          </div>
          <p className="brand-tagline">
            Discover your next favorite book. Explore thousands of titles.
          </p>
          
         
        </div>

        {/* RIGHT SIDE - LINKS GRID */}
        <div className="footer-right">
          {/* Explore Links */}
          <div className="footer-section">
            <h4 className="section-title">Explore</h4>
            <div className="footer-links">
              <Link to="/" className={`footer-link ${isActive('/top-books') ? 'active' : ''}`}>
                Home
              </Link>
              <Link to="/recommend" className={`footer-link ${isActive('/recommend') ? 'active' : ''}`}>
                Recommendations
              </Link>
              <Link to="/" className={`footer-link ${isActive('/') ? 'active' : ''}`}>
                Top Books
              </Link>
            </div>
          </div>

          {/* Account Links */}
          <div className="footer-section">
            <h4 className="section-title">Account</h4>
            <div className="footer-links">
              <Link to="/login" className={`footer-link ${isActive('/login') ? 'active' : ''}`}>
                Login
              </Link>
              <Link to="/signup" className={`footer-link ${isActive('/signup') ? 'active' : ''}`}>
                Sign Up
              </Link>
              <Link to="/favorites" className={`footer-link ${isActive('/favorites') ? 'active' : ''}`}>
                Wishlist
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="section-title">Contact</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>umohdfaizan@gmail.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>+91 8810743304</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="copyright">
            &copy; {currentYear} <span className="highlight">BookHub</span>. All Rights Reserved.
          </div>
          <div className="legal-links">
            <Link to="/privacy" className="legal-link">Privacy Policy</Link>
            <Link to="/terms" className="legal-link">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;