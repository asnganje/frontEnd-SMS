import React, { useState } from "react";
import Navbar from "./Navbar";
import '../styles/home.css'
import Footer from "./Footer";
import Basic from "./basic";
import Login from "./Login";
const Home = () => {
    const [user, setUser] = useState(false)


    const updateUser = (loggedIn) => {
        setUser(loggedIn)
    }
    return(
        <div className="home-container">
            <Navbar user = {user}/>
            <h1 className = "main-header">School Management System</h1>
            <div>
                {user? <Basic /> : <Login setUser = {updateUser}/>}
            </div>
            <Footer/>
        </div>
    )
}

export default Home;