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
    return {
        post: state.posts.find(post => post.id === id)
        /*another way to write this: 
        post: state.posts.find((post) => {
            return post.id === id
        })*/
    }
}
export default connect(mapStatetoProps)(Post)