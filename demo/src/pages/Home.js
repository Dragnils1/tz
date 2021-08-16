import React, { Component } from 'react';
import axios from "axios"
import Cards from '../components/card'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            res: []
        }

        this.getPosts = this.getPosts.bind(this)

    }

        getPosts () {
                axios.get("http://localhost:8080/user")
                    .then((res) => { 
                        const data = res.data
                        this.setState({
                            res: data,
                        })
                    })
                    .catch(err => {console.log(err.message);})
                }

            componentDidMount() {
                this.getPosts()
            }

    render() {
        return (
            <div>
                <div>
                    <p>Все работники:</p>

                </div>
                {this.state.res.map((elem) => {
                        return <Cards elem={elem} key={elem.id} />
                })}          
            </div>
        );
    }
}



export default Home;
