import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import PostTableRow from './PostTableRow';

export default class PostList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
 
    axios.get('http://localhost:4000/posts/' )
    .then(res => {
      this.setState({
        posts: res.data
      });
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

  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Street</th>
            
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Company</th>
            <th>Job Title</th>
            <th>Max Salary</th>
            <th>Min Salary</th>
            
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}