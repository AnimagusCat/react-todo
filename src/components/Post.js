import React, { Component } from 'react'
// import axios from 'axios'
import { connect } from 'react-redux'

//in class-based components, you automatically get props
class Post extends Component {
    // state = {
    //     post: null
    // }

    // componentDidMount(){
    //     let id = this.props.match.params.post_id;
    //     axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    //         .then(res => {
    //             this.setState({
    //                 post: res.data
    //             })
                
    //         })
    // }
    render() {
        // const post = this.state.post ? (
        const post = this.props.post ? (
            <div className="post">
                {/* <h4 className="center">{this.state.post.title}</h4> */}
                {/* <p>{this.state.post.body}</p> */}
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
            </div>
        ) : (
            <div className="center">Loading post...</div>
        )

        return (
            <div className="container">
                <h4>{ post }</h4>
            </div>
        )
    }
}

const mapStatetoProps = (state, ownProps) => {
    //get the post id from the component's own props
    let id = ownProps.match.params.post_id;

    //return the post from the state store if the id matches with the route params
    return {
        post: state.posts.find(post => post.id === id)
        /*another way to write this: 
        post: state.posts.find((post) => {
            return post.id === id
        })*/
    }
}

//dispatch function
const mapDispatchToProps = (dispatch) => {
    return {
        //deletePost property value is a dispatch function that takes in the id to delete
        deletePost: (id) => {
            //run dispatch function with parameters - type of action and the payload
            dispatch({type: 'DELETE_POST', id: id})
        }
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Post)