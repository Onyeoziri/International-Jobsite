import React, { useEffect } from "react";
import "./Features.css";
//import { BsFillBookmarkStarFill } from "react-icons/bs";
import phoneFeatures from "../../assets/phone-features.png";
//import Feature from "./Feature";
//import { FeatureList } from "./data";
import Button from "../UI/Button/Button";
import "../UI/Button/Button.css";

import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="features">
      <div className="container features">
        <div className="title" data-aos="fade-up">
         
        </div>
        <div className="features-content">
          <div className="features-left" data-aos="fade-right">
            <img src={phoneFeatures} alt="phone" />
          </div>
          <div className="features-right" data-aos="fade-left">
            {/* {FeatureList.map((feature) => (
              <Feature
                // key={feature.id}
                // icon={feature.icon}
                // heading={feature.heading}
                // text={feature.text}
              />
            ))} */}
            <h1>We're not your typical job  career site</h1>
            <p>Our goal was to create a singular job site for international students. No more searching through websites for jobs that
              sponser. No more unfriendly companies that will take advantage. 
            </p><br></br>
            <Button text={"Learn more"} btnClass={"btn-light"} href={"#"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;