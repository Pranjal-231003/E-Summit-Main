import React from 'react'
import "./page.css"
import logo from "../images/logo.png"
function LandingPage() {
  const onclick=()=>{

  }
  window.addEventListener("scroll",(event)=>{
      
  })
  return (
    <>
        <div id='Page_container' className='hover-this'>
            <div className='rectangle'></div>
            <nav className='navbar'>
              <img src={logo} alt="" />
   
            </nav>
            <h1><span>E-SUMMIT</span></h1>
            
            
            <div class="cursor"></div>
        </div>
        
    </>
  )
}

export default LandingPage