import React, { Component } from 'react';
import axios from "axios"
import Cards from "../components/card"
import { useParams } from "react-router-dom";

class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {
            res: []
        }

        this.getUser = this.getUser.bind(this)

    }

        getUser () {
            let id = this.props.id
            console.log(id);
            axios.get(`http://localhost:8080/user/${id}`)
                .then((res) => { 
                    if (res.data.name === "error") {
                        return console.log(res);
                    }
                    const data = res.data
                    this.setState({
                        res: data,
                    })
                })
                .catch(err => {console.log(err.message);})
            }

            componentDidMount() {
                this.getUser()
            }

    render() {
        return (
            <div>
                {this.state.res.map((elem) => {
                    return <Cards elem={elem} key={elem.id} />
                })}  
            </div>
        );
    }
}

function Worker() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <>
        <Child id={id} />
    </>
  );
}


export default Worker;
