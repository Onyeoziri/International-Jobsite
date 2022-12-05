import React, { useEffect } from "react";
import "./Subscribe.css";
import axios from 'axios';
import Button from "../UI/Button/Button";
import "../UI/Button/Button.css";

import AOS from "aos";
import "aos/dist/aos.css";

export default class  Subscribe extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      posts: []
    };
  };
  componentDidMount() {

 
    AOS.init({
      duration: 1000,
    });
    axios.get('http://localhost:4000/posts/' )
    .then(res => {
      this.setState({
        posts: res.data
      })
      console.log(this.state);
    
      
    
    })
    .catch((error) => {
      console.log(error);
    })

  };

  
render(){
  return (
    <section id="subscribe">
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

        <h1>Start Your Career with companies searching for you!</h1>
        {this.state.posts.slice(0,5).map((post,i) => (
             <p> 
            { post.company}</p> 
            ))}
        <br>
        
        
        </br>
        <Button text={"Who's Hiring "} btnClass={"btn-light"} href={"#"} />
      </div>
    </section>
  );
};
}
