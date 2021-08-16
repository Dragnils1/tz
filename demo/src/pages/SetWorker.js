import React, { Component } from 'react';
import {Form} from "react-bootstrap"
import axios from "axios"
import "../styles/SetWorker.css"

class SetWorker extends Component {
    constructor(props){
        super(props);
        this.state = {
            creatorName: "",
            adres: "", 
            firstName: "", 
            secondName: "", 
            LastName: "", 
            description: "", 
            role: "",
            employer: "",
            imagesrc: "",
            userId: Number,
            res1: [],
            res2: [],
            res3: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.getName = this.getName.bind(this);
        this.getDepartment = this.getDepartment.bind(this);
        this.getPosition = this.getPosition.bind(this)
    }


    handleChange(e) {
         this.setState({
            [e.target.name] : e.target.value
        })
    }

    async handleSubmit(e) {

        e.preventDefault()
         let post = {
            creatorName: this.state.creatorName,
            adres: this.state.adres,
            firstName: this.state.firstName,
            secondName: this.state.secondName,
            LastName: this.state.LastName,
            description: this.state.description,
            role: this.role.value,
            employer: this.employer.value,
            departmentname: this.departmentname.value,
            positionname: this.positionname.value,
            imagesrc: this.state.imagesrc
        }
        axios.post("http://localhost:8080/user", { post })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    async updateUser(e) {
        e.preventDefault();
        this.state.userId = Number(this.state.userId)
        let userId = this.state.userId
        let state = {...this.state}
        let post = {}
        for (const key in state) {
            // && state[key].length > 0
            if (typeof(state[key]) == "string" && state[key].length > 0) {
                post[key] = state[key]
            } 
        }
        console.log(post);
        axios.put(`http://localhost:8080/user/${userId}`, { post })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err.message);
            })
            
    }
    
    async getName () {
        axios.get("http://localhost:8080/users/name")
            .then(response => {
                this.setState({res1: response.data})
            })
    }

    async getDepartment () {
        axios.get("http://localhost:8080/departments/name")
            .then(response => {
                this.setState({res2: response.data})
            })
    }

    async getPosition () {
        axios.get("http://localhost:8080/positions/name")
            .then(response => {
                this.setState({res3: response.data})
            })
    }

    componentDidMount () {
        this.getName()
        this.getDepartment()
        this.getPosition()
    }
    render() {
        return (
            <div>
                <Form className="adminForm" onSubmit={this.handleSubmit}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Ваше имя:</Form.Label>
                        <Form.Control type="text" name="creatorName" value={this.state.creatorName} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput2">
                        <Form.Label>Ваш адрес:</Form.Label>
                        <Form.Control type="text" name="adres" value={this.state.adres} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea3">
                        <Form.Label>Фамилия:</Form.Label>
                        <Form.Control size="lg" type="text" name="LastName" value={this.state.LastName} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea4">
                        <Form.Label>Имя:</Form.Label>
                        <Form.Control size="lg" type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea5">
                        <Form.Label>Отчество:</Form.Label>
                        <Form.Control size="lg" type="text" name="secondName" value={this.state.secondName} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea10">
                        <Form.Label>Описание сотрудника:</Form.Label>
                        <Form.Control as="textarea" rows={3} name="description" 
                            value={this.state.description} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput6">
                        <Form.Label>Dставьте ссылку на картинку: </Form.Label>
                        <Form.Control type="text" name="imagesrc" value={this.state.imagesrc} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea7">
                        <Form.Label>ВЫберите роль сотрудника:</Form.Label>
                        <Form.Select aria-label="Default select example" ref = {(input)=> this.role = input}>
                            <option value="начальник" >начальник</option>
                            <option value="работник" >работник</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea8">
                        <Form.Label>Назначьте начальника:</Form.Label>
                        <Form.Select aria-label="Default select example" ref = {(input)=> this.employer = input}>
                            {this.state.res1.map((elem) => {
                                return <Emploers elem={elem} key={elem.id} />
                            })}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea9">
                        <Form.Label>Назначьте отдел:</Form.Label>
                        <Form.Select aria-label="Default select example" ref = {(input)=> this.departmentname = input}>
                            {this.state.res2.map((elem) => {
                                return <Departments elem={elem} key={elem.id} />
                            })}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea0">
                        <Form.Label>Назначьте должность:</Form.Label>
                        <Form.Select aria-label="Default select example" ref = {(input)=> this.positionname = input}>
                            {this.state.res3.map((elem) => {
                                return <Positions elem={elem} key={elem.id} />
                            })}
                        </Form.Select>
                    </Form.Group>
                    <input type="submit" value="Create"/>
                </Form>
                <div className="adminForm">
                        <p>Если вы хотети обновить данные у пользователя заполните нужные поля и укажите id сотрудника ниже</p>
                        <input type="number" onChange={this.handleChange} name='userId' value={this.state.userId}></input>
                        <button onClick={this.updateUser}>update department</button>   
                </div>
            </div>
        );
    }
}

function Emploers (props) {
    const el = props.elem.firstname
    return(
        <option value={el}>{el}</option>
    )
}

function Departments (props) {
    const el = props.elem.departmentname
    return(
        <option value={el}>{el}</option>
    )
}

function Positions (props) {
    const el = props.elem.positionname
    return(
        <option value={el}>{el}</option>
    )
}

export default SetWorker;
