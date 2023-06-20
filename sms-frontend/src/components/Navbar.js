import React from "react";
import '../styles/navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <ul className="nav-container">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About Us</Link></li>
                <li><Link to='/admin'>Admin</Link></li>
                <li><Link to='/student'>Student</Link></li>
                <li><Link to='/teacher'>Teacher</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>
        </div>
    )
} 
export default Navbar;