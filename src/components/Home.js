import React, { Component } from 'react'
// import axios from 'axios'
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'
import { connect } from 'react-redux'
//grabs the connect function from react-redux library to get a higher-order component

class Home extends Component {
    // state = {
    //     posts: []
    // }

    // componentDidMount(){
    //     //returns a promise
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         //runs when the above request has been completed
    //         .then(res => {
    //             console.log(res)
    //             //updates the state with the first 10 posts received from the result data
    //             this.setState({
    //                 posts: res.data.slice(0,10)
    //             })
    //         })
    // }
    render() {
        console.log(this.props);

        //grabs the posts property from the props
        const { posts } = this.props

        //grabs the posts property from the state
        // const { posts } = this.state;

        //if the posts array is empty, output a message. If not, display the posts
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={Pokeball} alt="A pokeball"/>
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                                <span className="card-title red-text">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No posts yet</div>
        )

        return (
            <div className="container home">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}

//pass in the state of the store and returning the posts property as defined in rootReducer.js
const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home)
//invoke the connect function which returns a higher-order component, then wrap the higher-order component outside of Home