import React, { useState } from "react";
import "./nav.css";

const Nav = ({ data }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const logo = data?.images?.find(img => img.name === "full-logo")?.src;

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setMenuOpen(false); // Close menu after clicking
        }
    };

    return (
        <nav>
            <div className="nav-logo">
                {logo ? (
                    <img src={logo} alt="Logo" onClick={() => window.location.reload()} />
                ) : (
                    <p>logo undefined</p>
                )}
            </div>

            {/* Hamburger Menu */}
            <div className="hamburger" onClick={() => setMenuOpen(true)}>
                ☰
            </div>

            {/* Fullscreen Overlay Menu */}
            {menuOpen && (
                <div className="fullscreen-menu">
                    <div className="close-btn" onClick={() => setMenuOpen(false)}>✕</div>
                    <ul>
                        <li onClick={() => scrollToSection("home")}>Home</li>
                        <li onClick={() => scrollToSection("services")}>Our Services</li>
                        <li onClick={() => scrollToSection("work")}>Our Work</li>
                        <li onClick={() => scrollToSection("contact")}>Contact</li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Nav;
