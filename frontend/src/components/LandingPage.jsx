import React from 'react'
import "./page.css"
import logo from "./logo.png"
function LandingPage() {
  return (
    <>
        <div className='Page_container'>
            <img src={logo} alt="" srcset="" />
            <h1>E-SUMMIT</h1>
            <div className='menu_option'>
                <a href='#'>FIGURES</a>
                <a href='#'>EVENTS</a>
                <a href='#'>ABOUT</a>
            </div>
        </div>
    </>
  )
}

export default LandingPage