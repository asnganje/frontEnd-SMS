import React, { useState } from "react";
import Navbar from "./Navbar";
import '../styles/home.css'
import Footer from "./Footer";
import Basic from "./basic";
import Login from "./Login";
import Loading from "./Loading";
const Home = () => {
    const [user, setUser] = useState(false)


    const updateUser = (loggedIn) => {
        setUser(loggedIn)
    }
    return(
        <div className="content-container">
            <Navbar user = {user}/>
            <Loading />
            <h1 className = "main-header">School Management System</h1>
            <div className="home-container">
                {user? <Basic /> : <Login setUser = {updateUser}/>}
            </div>
            <Footer/>
        </div>
    )
}

export default Home;