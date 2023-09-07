import { socialIcons } from "./data/data";
import '../styles/footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <p className="copyright">
          Copyright &copy; School Management System
          <span id="date">{new Date().getFullYear()}</span> All rights reserved
        </p>
        </footer>
    )
}

export default Footer;