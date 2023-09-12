import {React, useState, useEffect} from "react";
import Navbar from "./Navbar";
import axios from "axios";

const Parent = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [relationship, setRelationShip] = useState('')

    const [parents, setParents] = useState([])

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const parent = {
            firstName,
            lastName,
            email,
            contact,
            relationship
        }
        axios.post("http://127.0.0.1:3000/parent", {parent})
            .then(res=> {
                console.log(res.data)
            })
            .catch(err=> {
                console.log(err.response.data)
            })
    }

    useEffect(()=> {
        axios.get('http://127.0.0.1:3000/pareents')
        .then(res=> {
            setParents(res.data)
        })
        .catch(err=> {
            console.log(err)
        })
    })

    return(
        <div>
            <Navbar />
            <h1>Parents panel</h1>
            <div>
                <form onSubmit = {handleFormSubmit}>
                    <div>
                        <input
                            placeholder = "First name"
                            value = {firstName}
                            onChange = {(e)=> setFirstName(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            placeholder = "Last name"
                            value = {lastName}
                            onChange = {(e)=>setLastName(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            placeholder = "Email"
                            value = {email}
                            onChange = {(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            placeholder = "Contact"
                            value = {contact}
                            onChange = {(e)=> setContact(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            placeholder = "Relationship"
                            value = {relationship}
                            onChange = {(e)=>setRelationShip(e.target.value)}
                        />
                    </div>
                    <button type="submit">Add Parent</button>
                </form>
            </div>

                <div>
                    <table>
                        <thead>
                            <tr>
                                <td>No.</td>
                                <td>FirstName</td>
                                <td>LastName</td>
                                <td>Email</td>
                                <td>Contact</td>
                                <td>Relationship</td>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {parents.map((parent)=> {
                                return(
                                    <tr key = {parent.id}>
                                        <td>{parent.id}</td>
                                        <td>{parent.firstName}</td>
                                        <td>{parent.lastName}</td>
                                        <td>{parent.email}</td>
                                        <td>{parent.contact}</td>
                                        <td>{parent.relationship}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
        </div>
    )
}

export default Parent