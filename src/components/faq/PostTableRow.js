import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
export default class PostTableRow extends Component {
    constructor(props) {
        super(props);
        this.deletePost = this.deletePost.bind(this);
    }
    deletePost() {
        axios.delete('http://localhost:4000/posts/delete-post/' + this.props.obj._id)
            .then((res) => {
                console.log('Job post successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }
    render() {
        return (
            <tr>
                <td>{this.props.obj.location}</td>
                <td>{this.props.obj.jobLocationCity}</td>
                <td>{this.props.obj.jobLocationState}</td>
                <td>{this.props.obj.jobLocationPostal}</td>
                <td>{this.props.obj.company}</td>
                <td>{this.props.obj.jobTitle}</td>
                <td>{this.props.obj.maxSalary}</td>
                <td>{this.props.obj.minSalary}</td>
                <td>
                    <Link className="edit-link" to={"/edit-post/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deletePost} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}
