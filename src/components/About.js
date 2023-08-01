import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
const About = () => {
    return(
        <div>
            <Navbar />
            <h1>About Us</h1>
            <p><Link to='/'>Back to Home</Link></p>
        </div>
    )
}

export default About