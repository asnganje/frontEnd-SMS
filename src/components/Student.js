import React from "react";

const Student = ({response}) => {

    if(!response) {
        return (
            <div>
                <h3>Sorry, no student data captured yet!</h3>
            </div>
        )
    }
    return(
        <div>
            <h1>Student's details</h1>
            <div>
                <p>firstName: {response.firstName}</p>
                <p>Last Name: {response.lastName}</p>
                <p>Contact Email: {response.email}</p>
                <p>Gender: {response.gender}</p>
            </div>
        </div>
    )
}

export default Student