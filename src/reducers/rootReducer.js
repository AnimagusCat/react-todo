const initState = {
    posts: [
        {id: '1', title: 'Baby goat found', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {id: '2', title: 'Baby lion roars', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {id: '3', title: 'Mother hen lays eggs', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
    ]
}

const rootReducer = (state = initState, action) => {
    //check action type first 
    if (action.type === 'DELETE_POST') {
        //creates a new array without the post with matching id
        let newPosts = state.posts.filter(post => {
             return action.id !== post.id
        });
        return {
            //get all the properties from the state first
            ...state,
            //then overwrite the posts property with the new posts
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer