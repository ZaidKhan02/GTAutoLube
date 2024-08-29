import "./Copyright.css";
import { IoLocation } from "react-icons/io5";

function Copyright({ setMode }) {
    const handleContactClick = (evt) => {
        evt.preventDefault();
        setMode('contact');;
    };
    return (
        <nav className="copyright-container">
            <div className="copyright-content">
                <section className="gta-tools">
                    <div className="header">
                        GTAUTOTOOLS.COM
                    </div>
                    <div className="header-elements">
                        <a href="">Home</a>
                    </div>
                </section>
                <section className="customer-service">
                    <div className="header">CUSTOMER SERVICE
                    </div>
                    <div className="header-elements">
                        <a href="" onClick={handleContactClick}>Contact Us</a>
                    </div>
                </section>
                <section className="socials">
                    <header className="header-logo"><span className="red">GT</span>AutoTools</header>
                    <span className="address"><IoLocation /> 1634 Carletta Drive Mississauga, ON</span>
                </section>
            </div>
            <div className="copyright">
                <p>Copyright © 2024 GTAutoTools</p>
            </div>
        </nav>
    )
}

export default Copyright;

