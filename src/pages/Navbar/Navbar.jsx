import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
const Navbar =()=>{
    return(
        <div className="overallnav">
           <Link to='/'>Home</Link>
           <Link to='/about' >About</Link>
           <Link to="/work" >Workshop</Link>
           <Link to='/gallery' >Gallery</Link>
           <Link to="/contact">Contact</Link>
           
        </div>
    )
}

export default Navbar;