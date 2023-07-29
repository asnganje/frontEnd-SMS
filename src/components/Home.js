import React from "react";
import Navbar from "./Navbar";
import '../styles/home.css'
import Footer from "./Footer";
const Home = () => {
    return(
        <div className="home-container">
            <Navbar />
            <h1 className = "main-header">School Management System</h1>
            <Footer/>
        </div>
    )
}

export default Home;