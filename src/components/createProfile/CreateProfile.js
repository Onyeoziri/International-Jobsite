import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
//import Button from 'react-bootstrap/Button';
import axios from 'axios';
import AOS from "aos";
import "aos/dist/aos.css";
import { MdOutlineLibraryBooks } from "react-icons/md";
import Button from "../UI/Button/Button";
import "../UI/Button/Button.css";
export default class CreateProfile extends React.Component {
  constructor(props) {
    AOS.init({
      duration: 1000,
    });
    
    super(props)
    // Setting up functions
    this.onChangeProfileName = this.onChangeProfileName.bind(this);
    this.onChangeProfileEmail = this.onChangeProfileEmail.bind(this);
    this.onChangeProfilePassword = this.onChangeProfilePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // Setting up state
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }
  onChangeProfileName(e) {
    this.setState({ name: e.target.value })
  }
  onChangeProfileEmail(e) {
    this.setState({ email: e.target.value })
  }
  onChangeProfilePassword(e) {
    this.setState({ password: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()
    const profileObject = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    axios.post('http://localhost:4000/profiles/create-profile', profileObject)
      .then(res => console.log(res.data));
    this.setState({ name: '', email: '', password: '' })
  }
  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
         
          <Form.Control type="text" placeholder="name" value={this.state.name} onChange={this.onChangeProfileName} />
        </Form.Group>
        <Form.Group controlId="Email">
          
          <Form.Control type="text" placeholder='email' value={this.state.email} onChange={this.onChangeProfileEmail} />
        </Form.Group>
        <Form.Group controlId="Password">
        
          <Form.Control type="text" placeholder='password' value={this.state.password} onChange={this.onChangeProfilePassword} />
        </Form.Group>
        <Button text={"Create Profile"} variant={"danger"} size={"lg"} block={"block"} type={"submit"} btnClass={"btn-light"}>
          
        </Button>
        
      </Form>
    </div>);
  }
}