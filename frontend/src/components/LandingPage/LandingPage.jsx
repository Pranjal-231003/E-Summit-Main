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
   
            </nav>
            <h1>E-SUMMIT</h1>
            <div className='menu'>
              <div className="line"></div>
              <div className="option"><a href="#">Figures</a></div>
              <div className="eclipse_container">
                <div className="eclipse"></div>
                <div className="eclipse1"></div>
              </div>

              <div className="text"><a href="">menu</a></div>
              <div className="eclipse_container">
                <div className="eclipse1"></div>
                <div className="eclipse"></div>
              </div>
              <div className="option"><a href="#">About</a></div>
              <div className="line"></div>
            </div>

        </div>
        
    </>
  )
}

export default LandingPage