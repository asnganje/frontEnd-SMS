import {React, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import '../styles/login.css'
import ErrorModal from "./UI/ErrorModal";
import Loading from "./Loading";

const Login = ({setUser, getOnlineUser}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(false)


    
    const loginSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)

            try {
                const response =  await axios.post('http://127.0.0.1:3000/login', {email, password})
                localStorage.setItem('user', true)
                setUser(true) 
                const onlineUser = (response.data.firstName) 
                getOnlineUser(onlineUser)              
            } 
            catch (error) {
                setError({
                    title: "Invalid input",
                    message: "Incorrect"
                })
            }   
            setIsLoading(false)         
    }
    
    const handleErrorModal = () => {
        setError(null)
    }

    return(
        <>
            {isLoading && <Loading />}
            {error && <ErrorModal errorHandler = {handleErrorModal} title = {error.title} message = {error.message}/>}
            <div className="login-container">
                <h1>Welcome User</h1>
                <div>
                    <form onSubmit={loginSubmit} className="login-form">
                        <div>
                            <input
                            onChange={e => setEmail(e.target.value)} 
                            value={email}
                            placeholder="Email"/>
                        </div>
                        <div>
                            <input 
                            onChange={e=>setPassword(e.target.value)}
                            value={password}
                            type="password"
                            placeholder="Password"/>
                        </div>
                        <button className="loginBtn">Login</button>
                    </form>
                    <p>Not registered? <Link to='/register'>Register</Link></p>
                    <p><Link to='/'>Back to Home</Link></p>
                </div>
            </div>
        </>
    )
}

export default Login;