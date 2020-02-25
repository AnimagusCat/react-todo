import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'
//Using Link tag instead of a href will request react router dom to load the correct component instead of reloading the page
//Using NavLink will give the a href(Link tag) a class of active, useful if there's different style for active links
//withRouter is a higher-order component which wraps a component and gives it extra status

const Navbar = (props) => {
    //this is a programmatic redirect
    //If user goes to any page, after 2 secs will be redirected to the about page
    // setTimeout(() => {
    //     props.history.push('/about')
    // }, 2000)

    return (
       <nav className="nav-wrapper red darken-3">
           <div className="container">
               <a className="brand-logo">PokeTimes</a>
               <ul className="right">
                   <li><Link to="/">Home</Link></li>
                   <li><NavLink to="/about">About</NavLink></li>
                   <li><Link to="/contact">Contact</Link></li>
               </ul>
           </div>
       </nav> 
    )
}

export default withRouter(Navbar)
//withRouter is a function with Navbar(a component) as its parameter
//this will wrap the component with the props router properties