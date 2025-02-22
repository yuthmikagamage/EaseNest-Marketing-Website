import "../Footer/Footer.css";
import { FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="section">
                    <h4>Quick Navigation</h4>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Services</li>
                    </ul>
                </div>

                <div className="section">
                    <h4>Contact Us</h4>
                    <p>Email: easenest.app@gmail.com</p>
                    <p>Phone: +94 76 342 5325</p>
                    <p>Location: Colombo, SriLanka</p>
                </div>

                <div className="section">
                    <h4>Follow Us</h4>
                    <div className="icons">
                        <a href="https://www.facebook.com/share/1Bok8qVjwk/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                        </a>
                        <a href="https://www.instagram.com/easenest.app?igsh=YWx2NHNzZGNqa2d4&utm_source=qr" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                        </a>
                        <a href="https://www.linkedin.com/company/easenest/about/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin/>
                        </a>
                    </div>
                </div>
            </div>

            <div className="bottom">
                <p>© 2025 EaseNest. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
