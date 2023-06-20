import React from "react";
import { Link } from "react-router-dom";
import '../styles/register.css'

const Register = () => {
    return(
        <div className="register-container">
            <h1>Create an Account below!</h1>
            <form className="register-form">
                <div>
                    <input placeholder="First Name"/>
                </div>

                <div>
                    <input placeholder="Last Name"/>
                </div>

                <div>
                    <input placeholder="Email"/>
                </div>

                <div>
                    <select> Gender
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>

                <div>
                    <input placeholder="Password"/>
                </div>
                <button className="registerBtn">REGISTER</button>
            </form>
            <p>Already registered? <Link to='/login'>Login</Link></p>
            <p><Link to='/'>Revert to Home Page</Link></p>
        </div>
    )
}

export default Register;