// Footer.js

import React from 'react';
import './footer.css';
import { FaLocationDot } from "react-icons/fa6";
import logo from "../images/logo.png"
import building from "../images/footer.png"
import SocialButton from './Button/socialIcons';

const Footer = () => (
    <div className="footer-container">
        <img src={building} className='building' alt='building' />
        <div className="footer-content">
            <div className="quick-links">
                <h3>QUICK LINK</h3>
                <a href="#about_container">About</a>
                <a href="#Contact_container">Contact us</a>
            </div>
            <div className="logo-and-icons">
                <img src={logo} className='elogo' alt="E-SUMMIT logo" />
                <div className="social-icons">
                    <SocialButton />
                </div>
            </div>
            <div className="address">
                <FaLocationDot />
                <p>The LNM Institute of
                    <br /> Information Technology
                    <br />     Jaipur, Rajasthan
                    <br />(302031)</p>
            </div>
        </div>
        <div className="footer-bottom">
            <p>© 2024 All Rights Reserved. Ecell®</p>
        </div>
    </div>
);

export default Footer;
