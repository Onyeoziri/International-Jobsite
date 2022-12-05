
import React, { Component } from "react";
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
      super(props)
      // Setting up functions
      this.onChangeLoginEmail = this.onChangeLoginEmail.bind(this);
      this.onChangeLoginPassword = this.onChangeLoginPassword.bind(this);
      
      this.onSubmit = this.onSubmit.bind(this);
      // Setting up state
      this.state = {
        
        email: '',
        password: ''
       
      }
    }
    onChangeLoginEmail(e) {
      this.setState({ email: e.target.value })
    }
    onChangeLoginPassword(e) {
      this.setState({ password: e.target.value })
    }
  
    onSubmit(e) {
      e.preventDefault()
      const loginObject = {
        
        email: this.state.email,
        passwoord: this.state.password
      };
      axios.post('/logins/login', loginObject)
        .then(res => console.log(res.data));
      this.setState({  email: '', password: '' })
    }
    render() {
      return (<div className="form-wrapper">
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="Email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" value={this.state.email} onChange={this.onChangeLoginEmail} />
          </Form.Group>
          <Form.Group controlId="Password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={this.state.password} onChange={this.onChangeLoginPassword} />
          </Form.Group>
         
          <Button variant="danger" size="lg" block="block" type="submit" className="mt-4">
            Login
          </Button>
        </Form>
      </div>);
    }
  }