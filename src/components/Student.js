import axios from "axios";
import React, { useEffect, useState } from "react";

const Student = () => {
    const [data, setData] = useState([])
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
            <h1>List of all our Students</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>No.</td>
                            <td>FirstName</td>
                            <td>LastName</td>
                            <td>Email</td>
                            <td>Gender</td>
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