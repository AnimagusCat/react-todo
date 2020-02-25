import React from 'react'
import { Link, NavLink } from 'react-router-dom'
//Using Link tag instead of a href will request react router dom to load the correct component instead of reloading the page
//Using NavLink will give the a href(Link tag) a class of active, useful if there's different style for active links

const Navbar = () => {
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

export default Navbar