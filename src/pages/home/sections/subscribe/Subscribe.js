import React, { useEffect } from "react";
import "./Subscribe.scss";

import { TiSocialGooglePlus } from "react-icons/ti";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import {Button} from '../../../../components';
import '../../../../components/UI/Button.css'

import AOS from "aos";
import "aos/dist/aos.css";

const Subscribe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div id="subscribe">
      <div className="container subscribe" data-aos="fade-up">
        {/* <h2>Subscribe now!</h2>
        <form>
          <div className="form-control">
            <input type="text" placeholder="Enter Your Email..." />
            <button>Subscribe</button>
          </div>
        </form>
        <div className="social-icons">
          <div className="social-icon">
            <TiSocialGooglePlus />
          </div>
          <div className="social-icon">
            <FaFacebookF />
          </div>
          <div className="social-icon">
            <FaTwitter />
          </div>
          <div className="social-icon">
            <FaInstagram />
          </div>
        </div> */}

        <h1>Start Your Career </h1>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <br>
        
        
        </br>
        <Button text={"Who's Hiring "} btnClass={"btn-light"} href={"#"} />
      </div>
    </div>
  );
};

export default Subscribe;