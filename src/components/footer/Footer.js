import React from "react";
import "./Footer.scss";
import logo from "../../assets/logo.png";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer" className="sections foot">
      <div className="container footer">
        <h1>Footer</h1>
      <div className="footer-box">
          {/* <img src={logo} alt="logo" /> */}
          <p className="u-text-small">&copy; Copyright Logo</p>
        </div>

        <div className="footer-box">
          <h4>Students </h4>
          <div className="footer-links">
            <a href="#"> How it works</a>
            <a href="#"> Who's hiring</a>
            <a href="#"> Career builder</a>
          </div>
        </div>

        <div>
        <h4>Employee</h4>
        </div>

        <h4>Career Center</h4>
        <div className="footer-box">
          <h4>Support</h4>
          
          <div className="footer-links">
            <a href="#"> Students</a>
            <a href="#"> Employees</a>
            <a href="#"> Career Builder</a>
          </div>

        </div>
        
        
      </div>
    </div>
  );
};

export default Footer;