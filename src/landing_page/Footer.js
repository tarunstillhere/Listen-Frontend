import React from 'react';
import "../index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faSquareInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

function Footer() {
    return ( 
        <footer className='footer' style={{ backgroundColor: 'rgba(50, 50, 50, 0.1)' }}>  {/* Adjust the alpha to control transparency */}
        <div className='container text-center'>
            {/* Logo and Title */}
            <div className='row footer-logo' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <img className="logo-footer" src="./media/images/logo.svg" alt="Logo" />
                </Link>
    
                <Link to="/" style={{ textDecoration: "none" }}>
                    <p className="logo-title" style={{ color: "#fff", fontSize: '1.3rem' }}>LISTNER</p>
                </Link>
            </div>
    
            {/* Social Media Icons */}
            <div className='social-links mt-4' style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                <a href='#' style={{ color: '#fff' }}>
                    <FontAwesomeIcon icon={faFacebook} size='2x' />
                </a>
                <a href='#' style={{ color: '#fff' }}>
                    <FontAwesomeIcon icon={faTwitter} size='2x' />
                </a>
                <a href='#' style={{ color: '#fff' }}>
                    <FontAwesomeIcon icon={faSquareInstagram} size='2x' />
                </a>
                <a href='#' style={{ color: '#fff' }}>
                    <FontAwesomeIcon icon={faLinkedin} size='2x' />
                </a>
            </div>
    
            {/* Footer Paragraph */}
            <p style={{ color: "#fff", marginTop: '70px', fontSize: '1.1rem' }}>Let's help each other</p>
        </div>
    </footer>
    
    );
}

export default Footer;
