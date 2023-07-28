import React from "react";
import '../styles/navbar.css'
import { Link } from "react-router-dom";
import { navData } from "./data/data";

const Navbar = () => {
    return (
        <div>
            <ul className="nav-container">
                {navData.map((navItem)=> {
                    return (
                        <li key={navItem.link}><Link to={navItem.link}>{navItem.text}</Link></li>
                    )
                })}
            </ul>
        </div>
    )
} 
export default Navbar;