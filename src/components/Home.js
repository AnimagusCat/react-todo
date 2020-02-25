import React, { Component } from 'react'
import axios from 'axios'

class Home extends Component {
    state = {
        posts: []
    }

    componentDidMount(){
        //returns a promise
        axios.get('https://jsonplaceholder.typicode.com/posts')
            //runs when the above request has been completed
            .then(res => {
                console.log(res)
                //updates the state with the first 10 posts received from the result data
                this.setState({
                    posts: res.data.slice(0,10)
                })
            })
    }
    render() {
        //grabs the posts property from the state
        const { posts } = this.state;
        //if the posts array is empty, output a message. If not, display the posts
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                        <span className="card-title">{post.title}</span>
                        <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No posts yet</div>
        )

        return (
            <div className="container">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}

export default Home