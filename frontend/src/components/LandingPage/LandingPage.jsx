// LandingPage.jsx
import React from 'react';
import "./page.css";
import logo from "../images/logo.png";
import withCursor from '../Cursor/Cursor'; // Import the HOC

class LandingPage extends React.Component {
  render() {
    return (
      <>
        <div id='Page_container'>
          <div className='rectangle'></div>
          <nav className='navbar'>
            <img src={logo} alt="" />
          </nav>
          <h1 className='text-element'>E-SUMMIT</h1>
          
          {/* Add other text elements as needed */}
          <div className="cursor"></div>
        </div>
      </>
    );
  }
}

export default withCursor(LandingPage); // Wrap the component with the HOC
