import { socialIcons } from "./data/data";
import '../styles/footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <ul className="footer-icons">
                {socialIcons.map((icon)=> {
                    return (
                        <li key={icon.id}>
                            <a href={icon.href} rel="noreferrer" className="footer-icon"  target="_blank" alt="footer social icon">
                                <i className={icon.icon}></i>
                            </a>
                        </li>
                    )
                })}
            </ul>
            <p className="copyright">
          copyright &copy; School Management System
          <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
        </footer>
    )
}

export default Footer;