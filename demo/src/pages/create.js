import axios from 'axios';
import React from 'react';

class Create extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            department: "",
            position: "", 
            newDepartment: "",
            newPosition: ""
        }
        this.createDepartment = this.createDepartment.bind(this);
        this.createPosition = this.createPosition.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.updateDepartment = this.updateDepartment.bind(this)
        this.updatePosition = this.updatePosition.bind(this)
    }
    handleChange(e) {
         this.setState({
            [e.target.name] : e.target.value
        })
    }
    createDepartment () {
        axios.post('http://localhost:8080/department', {department: this.state.department})
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err.message);
            })
    }
    createPosition () {
        axios.post('http://localhost:8080/position', {position: this.state.position})
        .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err.message);
            })
    }
    updateDepartment () {
        axios.put(`http://localhost:8080/department/${this.state.department}`, {newDepartment: this.state.newDepartment})
        .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err.message);
            })
    }
    updatePosition () {
        axios.put(`http://localhost:8080/position/${this.state.position}`, {newPosition: this.state.newPosition})
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
                    <div>
                        <p>Создать организацию: </p>       
                        <input type="text" value={this.state.department} name="department" onChange={this.handleChange}  ></input>
                        <button onClick={this.createDepartment}>create department</button>
                        <p>Если вы хотетите обновить имя организации добавте старое имя в поле: "Создать организацию" и укажите новое в поле: "новое имя"</p>
                        <input type="text" onChange={this.handleChange} name='newDepartment' value={this.state.newDepartment}></input>
                        <button onClick={this.updateDepartment}>update department</button>
                    </div>
                    <div>       
                        <p>Создать позицию работника: </p>
                        <input type="text" onChange={this.handleChange} name='position' value={this.state.position}></input>
                        <button onClick={this.createPosition}>create position</button>
                        <p>Если вы хотетите обновить имя организации добавте старое имя в поле: "Создать организацию" и укажите новое в поле: "новое имя"</p>
                        <input type="text" onChange={this.handleChange} name='newPosition' value={this.state.newPosition}></input>
                        <button onClick={this.updatePosition}>update position</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Create;