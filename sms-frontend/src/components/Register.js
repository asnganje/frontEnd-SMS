import {React, useState} from "react";
import { Link } from "react-router-dom";
import '../styles/register.css'
import axios from "axios";

const Register = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('male')
    const [password, setPassword] = useState('')

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const user = {
            firstName,
            lastName,
            email,
            password,
            gender
        };
        
        axios.post('http://127.0.0.1:3000/register', {user})
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err.response.data)
            })
            
    }
    
    return(
        <div className="register-container">
            <h1>Create an Account below!</h1>
            <form onSubmit={handleFormSubmit} className="register-form">
                <div>
                    <input
                    onChange={(e)=> setFirstName(e.target.value)} 
                    value={firstName}
                    placeholder="First Name"/>
                </div>

                <div>
                    <input 
                    onChange={(e)=>setLastName(e.target.value)}
                    value={lastName}
                    placeholder="Last Name"/>
                </div>

                <div>
                    <input 
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                    placeholder="Email"/>
                </div>

                <div>
                    <select
                    onChange={(e)=>setGender(e.target.value)}
                    value={gender}
                    > Gender
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>

                <div>
                    <input 
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                    placeholder="Password"/>
                </div>
                <button className="registerBtn">REGISTER</button>
            </form>
            <p>Already registered? <Link to='/login'>Login</Link></p>
            <p><Link to='/'>Revert to Home Page</Link></p>
        </div>
    )
}

export default Register;