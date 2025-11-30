import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">TheBlackStore</h3>
          <p className="footer-description">
            Premium black garments for the discerning fashion enthusiast.
            Where elegance meets darkness.
          </p>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-heading">Contact Us</h4>
          <ul className="footer-links">
            <li>Email: contact@theblackstore.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Address: 123 Fashion Street, Style City</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-heading">Help</h4>
          <ul className="footer-links">
            <li>Shipping Information</li>
            <li>Returns & Exchanges</li>
            <li>Size Guide</li>
            <li>FAQ</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-heading">Follow Us</h4>
          <ul className="footer-links">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Pinterest</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} TheBlackStore. All rights reserved.</p>
          <div className="footer-legal">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

