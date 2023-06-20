import {React, useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import '../styles/login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginSubmit = (e) => {
        e.preventDefault();

        axios.post('http://127.0.0.1:3000/login', {email, password})
            .then(res => {
                console.log('res', res)
            })
            .catch(err=>{
                console.log('err', err)
            })

        console.log({email, password})
    }


    return(
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
                        placeholder="Password"/>
                    </div>
                    <button className="loginBtn">Login</button>
                </form>
                <p>Not registered? <Link to='/register'>Register</Link></p>
                <p><Link to='/'>Revert to Home Page</Link></p>
            </div>

        </div>
    )
}

export default Login;