import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Responsivenav.css';
import img from "../images/logo.png"

const ResponsiveNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showESummit, setShowESummit] = useState(false);

  const handleNavClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const openESummit = () => {
    // console.log("Opening E-Summit");
    setShowESummit(true);
  };

  const scrollToSection = (sectionId) => {
    scroll.scrollTo(sectionId, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
    setShowESummit(false);
    closeNav(); // Close the navigation after scrolling to a section
  };

  return (
    <header>
      <div className='navdis'>
        <nav className="navbar">
          <Link to='/'>
            <img src={img} className="logo" alt="Logo" />
          </Link>
          <div className={`nav-links ${isNavOpen ? 'show-nav' : 'hide-nav'}`}>
            <ScrollLink to="about_container" smooth={true} duration={800} onClick={() => scrollToSection("about_container")}>
              <Link to='/' onClick={closeNav}>
                About
              </Link>
            </ScrollLink>
            <Link to='/Competitions' onClick={closeNav}>
              Competitions
            </Link>
            <ScrollLink to="Events_container" smooth={true} duration={800} onClick={() => scrollToSection("Events_container")}>
              <Link to='/' onClick={closeNav}>
                Events
              </Link>
            </ScrollLink>
            <ScrollLink to="Contact_Container" smooth={true} duration={800} onClick={() => scrollToSection("Contact_Container")}>
              <Link to='/' onClick={closeNav}>
                Contact Us
              </Link>
            </ScrollLink>
            <Link to="/Sponsors" onClick={closeNav}>
              Sponsors
            </Link>
            <Link to='/team' onClick={closeNav}>
              Our Team
            </Link>
            {/* <Link to='https://ybc.social/pages/LNMIIT' target='_blank' onClick={closeNav}>
              Merchandise
            </Link> */}
          </div>
          <div className={`nav-icon`} onClick={handleNavClick}>
            {isNavOpen ? <FaTimes /> : <FaBars />}
          </div>
          {isNavOpen && <div className="overlay" onClick={closeNav}></div>}
        </nav>
      </div>
    </header>
  );
};

export default ResponsiveNav;
