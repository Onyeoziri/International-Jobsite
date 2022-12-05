//import React, { useEffect } from "react";
import React from "react";
//import { questions } from "./data.js";
import Question from "./Question";
import { MdOutlineLibraryBooks } from "react-icons/md";
import axios from 'axios';
import PostTableRow from './PostTableRow';
//import DataTable from './post-list.component';
//import Table from 'react-bootstrap/Table';
import AOS from "aos";
import "aos/dist/aos.css";



export default class  Faq extends React.Component{

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
    
  }
   
  DataTable() {
    return this.state.posts.map((res, i) => {
      return <PostTableRow obj={res} key={i} />;
      
    });
  }

  render(){
    
    return (
      

        <section id="faq">
      <div className="container faq">
        <div className="u-title" data-aos="fade-up">
          
          <MdOutlineLibraryBooks color="orangered" size={30} />
          <h2>Jobs</h2>
          <p className="u-text-small">
           Job offers. Click cor Company.
          </p>
        </div>
        <div className="questions">
        <ul>
        {this.state.posts.slice(0,5).map((post,i) => (
             <li> <Question
             key={post.jobkey}
             title={post.jobTitle}
             company={post.company}
             location={post.location}
             salary={post.maxSalary}
           /></li> 
             
            ))}
    </ul>
  );
         
      


        </div>
      </div>
      
    </section>
    
  )}
 


 

  
};

