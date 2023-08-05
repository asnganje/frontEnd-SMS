import '../styles/navbar.css'
import { Link } from "react-router-dom";
import { navData } from "./data/data";

const Navbar = ({user}) => {
    let updatedData = []
    if(user) {
        updatedData = [...navData.filter((e)=>e.text !=='Login'), {text: "Logout", link: '/login'}]
    } else {
        updatedData = navData
    }
    
    return (
        <div>
            <ul className="nav-container">
                {updatedData.map((navItem)=> {
                    return (
                        <li key={navItem.text}><Link to={navItem.link}>{navItem.text}</Link></li>
                    )
                })}
            </ul>
        </div>
    )
} 
export default Navbar;