import React from 'react'
import "./page.css"
import logo from "../images/logo.png"
function LandingPage() {
  return (
    <>
        <div className='Page_container'>
            <div className='rectangle'></div>
            <nav className='navbar'>
              <img src={logo} alt="" />
              <div className='option'>
                <a href='#'>FIGURES</a>
                <a href='#'>EVENTS</a>
                <a href='#'>ABOUT</a>
              </div>
            </nav>
            <h1>E-SUMMIT</h1>
            <div className='menu'>
              <div className="line"></div>
              <div className="text">menu</div>
              <div className="line"></div>
            </div>

        </div>
    </>
  )
}

export default LandingPage