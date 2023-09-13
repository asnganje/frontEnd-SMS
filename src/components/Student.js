import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import '../styles/student.css'
import AddedParent from './AddedParent'

const Student = () => {
    const [data, setData] = useState([])

// users as students
    useEffect(()=> {
        axios.get('http://127.0.0.1:3000/api/users')
        .then((response)=> {
            setData(response.data)
        })
        .catch((err)=> {
            console.log(err.response.data)
        })

    }, [])

    return(
        <div>
            <Navbar />
            <h1 className="students-header">Students List</h1>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <td>No.</td>
                            <td>FirstName</td>
                            <td>LastName</td>
                            <td>Email</td>
                            <td>Gender</td>
                            <td>Parent</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item)=> {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.gender}</td>
                                    <td>{<AddedParent studentId = {item.id}/>}</td>
                                </tr>            
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Student