import React, { Component } from 'react';
<<<<<<< HEAD
import _ from 'lodash';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';
export default class extends Component{

    constructor(props){
        super(props);
        this.state = {
            listName: [
                {
                    name: "Sophie",
                    age: 24
                },
                {
                    name: "Nathan",
                    age: 21
                },
                {
                    name: "Stephen",
                    age: 33
                }
            ],
            searchME: ''
        }
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(event){
        event.preventDefault()
    }

    getList(){
        return _.map(this.state.listName, (item, key) => {
            return(
                <tr key={key}>
                    <td>
                            {item.name}
                    </td>
                    <td>{item.age}</td>
                </tr>
            )
        })
    }

    render(){
        return(
            <div className="container mt-4">
                <h1>The list</h1>
                <form onSubmit={this.onFormSubmit} className ="input-group mb-4">
                <input
                placeholder="Search..."
                className="form-control"
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-primary">
                        Search
                    </button>
                </span>
            </form>
                <Table hover className="mt-4">
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getList()}
                    </tbody>
                </Table>
                {this.props.children}
=======

export default class extends Component{
    render(){
        return(
            <div>
                <h1>Hello</h1>
>>>>>>> bd76a990287fa1bcb39f37d962634c62cdd2812b
            </div>
        )
    }
}
