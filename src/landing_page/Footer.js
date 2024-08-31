import React from 'react';
import "../index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter,faSquareInstagram,faLinkedin,faFacebook } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return ( 
    <footer className='footer mt-5'>
        <div className='container mt-5 '>
            <div className='row'>
                <div className='col mt-5'></div>
                <div className='footer-links col mb-5 mt-5'>
                    <p style={{color : "#fff"}}>Explore</p>
                    <a href=''>How it works?</a><br/>
                    <a href=''>Technology</a><br/>
                    <a href=''>Fulfilment Centre</a><br/>
                    <a href=''>Pricing</a><br/>
                </div>
                <div className='footer-links col mb-5 mt-5'>
                    <p style={{color : "#fff"}}>Resources</p>
                    <a href=''>Help Center</a><br/>
                    <a href=''>Developers</a><br/>
                    <a href=''>Blog</a><br/>
                    <a href=''>App Store</a><br/>
                </div>
                <div className='footer-links col mb-5 mt-5'>
                    <p style={{color : "#fff"}}>Company</p>
                    <a href=''>About</a><br/>
                    <a href=''>Customers</a><br/>
                    <a href=''>Jobs</a><br/>
                    <a href=''>Contact</a><br/>
                </div>
            </div>
            <div className='social-links mt-5' style={{display: 'flex', justifyContent: 'center'}}>
                <a href=''><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href=''><FontAwesomeIcon icon={faSquareInstagram} /></a>
                <a href=''><FontAwesomeIcon icon={faFacebook} /></a>
                <a href=''><FontAwesomeIcon icon={faTwitter} /></a>
            </div>
        </div>
    </footer>
     );
}

export default Footer;