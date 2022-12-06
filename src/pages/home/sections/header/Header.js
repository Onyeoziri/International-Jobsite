import React, { useEffect } from "react";
import "./Header.css";
import {Button} from '../../../../components';
import '../../../../components/UI/Button.css'
import phoneHeader from "../../../../assets/phone-header-bg.png";
import { BsMouse } from "react-icons/bs";

import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="header">
      <div className="container header">
        <div className="header-left" data-aos="fade-right">
          <h1>
            <span>An easy way for international students</span>
            <span>to get hired</span>
          </h1>
          <p className="u-text-small">
            Our wedsite helps ...................
          </p>
          <div className="header-cta">
          <input type="text" placeholder="Enter your .edu mail here" />


            <Button text={"Sign Up"} btnClass={"btn-light"} href={"#"} />
          </div>
        </div>
        <div className="header-right" data-aos="fade-left">
          <img src={phoneHeader} alt="phone" />
        </div>
      </div>
      <div className="floating-icon">
        <a href="#features">
          <BsMouse color="#fff" size={25} className="mouse" />
        </a>
      </div>
    </section>
  );
};

export default Header;