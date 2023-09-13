import { useState, useEffect } from "react";
import axios from "axios";

const AddedParent =({studentId}) => {
    const [view, setView] = useState('')
    const [parentInfo, setParentInfo] = useState([])
    const [visible, setVisible] = useState(false)
        // parents

        useEffect(()=> {
            axios.get('http://127.0.0.1:3000/pareents')
            .then(res=> {
                setParentInfo(res.data)
            })
            .catch(err=> {
                console.log(err)
            })
        }, [])
    

    const handleParentDisplay =() => {

        const getParent = parentInfo.filter((parent)=> {
            if(parent.id === studentId) {
                return parent
            }
        })
        if(getParent.length<1) {
            setView('')
        } else {
            setView(getParent)
            setVisible(!visible)
        }
    }

   
    return (
        <div>
            <button onClick={handleParentDisplay}>View</button>
            {visible && <div>
                <h4>{view[0].firstName}</h4>
                <p>{view[0].lastName}</p>
                <p>{view[0].contact}</p>
                <p>{view[0].relationship}</p>
            </div>
            }
        </div>
    )
}

export default AddedParent;