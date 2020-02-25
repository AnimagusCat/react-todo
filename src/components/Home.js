import React, { Component } from 'react'
import axios from 'axios'
class Home extends Component {
    componentDidMount(){
        //returns a promise
        axios.get('https://jsonplaceholder.typicode.com/posts')
            //runs when the above request has been completed
            .then(res => {
                console.log(res)
            })
    }
    render() {
        return (
            <div className="container">
                <h4 className="center">Home</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        )
    }
}

export default Home