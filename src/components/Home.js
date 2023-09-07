import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import '../styles/home.css'
import Footer from "./Footer";
import Basic from "./basic";
import Login from "./Login";

const Home = () => {

    const [user, setUser] = useState(localStorage.getItem('user'))
    const [onlineUser, setOnline] = useState(null)
    const [welcomeInfo, setWelcomeInfo ] = useState(true)

    const updateUser = (loggedIn) => {
        setUser(loggedIn)
    }

    const getOnlineUser =(onlineUser)=> {
        setOnline(onlineUser)
    }

    useEffect(()=> {
       const timer = setTimeout(()=> {
            setWelcomeInfo(false)
        }, 10000)

        return ()=>clearTimeout(timer)
    },[])
 
    return(
        <div className="content-container">
            {user && welcomeInfo && <p className="welcome-info">Welcome {onlineUser}...</p>}
            <Navbar user = {user}/>
            <div className="home-container">
                {user? <Basic /> : <Login setUser = {updateUser} getOnlineUser = {getOnlineUser}/>}
            </div>
            <Footer/>
        </div>
    )
}

export default Home;