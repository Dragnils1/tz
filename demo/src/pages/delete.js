import axios from 'axios';
import React from 'react';

class Delete extends React.Component {
    constructor(prors) {
        super(prors)
        this.state = {
            user: 0,
            department: '',
            position: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.deleteUser = this.deleteUser.bind(this)
        this.deleteDepartment = this.deleteDepartment.bind(this)
        this.deletePosition = this.deletePosition.bind(this)
    }
    handleChange (e) {
        this.setState({[e.target.name]: e.target.value})
    }
    deleteUser () {
        axios.delete(`http://localhost:8080/user/${this.state.user}`)
        .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err.message);
            })
    }
    deleteDepartment () {
        axios.delete(`http://localhost:8080/department/${this.state.department}`)
        .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err.message);
            })
    }
    deletePosition () {
        axios.delete(`http://localhost:8080/position/${this.state.position}`)
        .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    render() {
        return (
            <div>
                <div>
                    <input type="number" onChange={this.handleChange} name='user' value={this.state.user}></input>
                    <button onClick={this.deleteUser}>delete user</button>
                </div>
                <div>
                    <input type="text" onChange={this.handleChange} name='department' value={this.state.department}></input>
                    <button onClick={this.deleteDepartment}>delete department</button>
                </div>
                <div>
                    <input type="text" onChange={this.handleChange} name='position' value={this.state.position}></input>
                    <button onClick={this.deletePosition}>delete position</button>
                </div>
            </div>
        );
    }
}

export default Delete;
