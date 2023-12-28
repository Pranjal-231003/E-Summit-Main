// LandingPage.jsx
import React from 'react';
import "./page.css";
import logo from "../images/logo.png";
import navbar from "../images/navbar.png"
import withCursor from '../Cursor/Cursor'; // Import the HOC

class LandingPage extends React.Component {
  render() {
    return (
      <>
        <div id='Page_container'>
          <div className='rectangle'></div>
         
          <nav className='navbar'>
            <img src={logo} className='logo' alt="" />
            <img src={navbar} className='onclick' alt="" srcset="" />
          </nav>
          <div className="logo_container">

          </div>
          <h1 className='text-element'><span className='text_s'>E-SUMMIT</span></h1>
          <div className="design_container"></div>
          {/* Add other text elements as needed */}
          <div className="cursor"></div>
        </div>
      </>
    );
  }
}

export default withCursor(LandingPage); // Wrap the component with the HOC
