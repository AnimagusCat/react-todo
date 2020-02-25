import React from 'react'

//function wraps a component with random color class
const Rainbow = (WrappedComponent) => {

    //generate random colour
    const colours = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];
    const randomColour = colours[Math.floor(Math.random() * 5)];
    
    //assign that random color as a MaterializeCss class eg. 'red-text'
    const className = randomColour + '-text';

    //this function returns the original component(WrappedComponent) with the added classname
    //passing props to this function will pass the original props to the changed component again
    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default Rainbow