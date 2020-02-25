import React from 'react'
import Rainbow from '../hoc/Rainbow'

const About = () => {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    )
}

export default Rainbow(About)
//'About' component is passed as a parameter of the Rainbow higher-order component function, so 'About' is the WrappedComponent
//eg. const Rainbow = (WrappedComponent) => {}