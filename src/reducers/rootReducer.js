const initState = {
    posts: [
        {id: '1', title: 'Baby goat found', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {id: '2', title: 'Baby lion roars', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {id: '3', title: 'Mother hen lays eggs', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer