import { keyActivities } from "./data/data"
import image from '../images/school.png'
import './basic.css'

const Basic = () => {
    return (
        <div className="basicContainer">
            <ul>
                {keyActivities.map((item)=> {
                    return (
                        <li key={item.id}> {item.text} </li>
                    )
                })}
            </ul>
            <img src={image} alt="school environment"/>
        </div>

    )
}

export default Basic;