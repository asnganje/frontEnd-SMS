import '../styles/navbar.css'
import { Link } from "react-router-dom";
import { navData, socialIcons } from "./data/data";
import schoolLogo from '../images/schoolLogo.jpg'
import {FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react';
import Home from './Home';
import Login from './Login';

const Navbar = ({user}) => {

    const [showLinks, setShowLinks] = useState(false)

    let updatedData = []
    if(user) {
        updatedData = [...navData.filter((e)=>e.text !=='Login')]
    } else {
        updatedData = navData
    }
    const toggleLinks = () => {
        setShowLinks(!showLinks)
    }
    const handleUserLogout = ()=> {
        localStorage.removeItem('user')
        window.location.href = '/'
    }

    return (
        <nav>
            <div className='nav-center'>
                <div className='nav-header'>
                    <img src= {schoolLogo} className='schoolLogo' alt='school logo'/>
                    <button className='nav-toggle' onClick={toggleLinks}>{showLinks?<FaTimes/>:<FaBars/>}</button>
                </div>
                <div className={showLinks?'show-container':'links-container'}>
                        <ul className='links'>
                            {updatedData.map((item) => {
                                const {id, url, text} = item;
                                return (
                                    <li key={id}>
                                        <a href={url}>{text}</a>
                                    </li>
                                )
                            })}
                            <li>
                                {user&& <button className='logoutBtn' onClick={handleUserLogout}>{user?'Logout':'Login'}</button>}
                            </li>
                        </ul>
                </div>
                <ul className='social-icons'>
                    {socialIcons.map((item) => {
                        const {id, url, icon} = item
                        return(
                            <li key={id}>
                                <a href={url}>{icon}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
} 
export default Navbar;