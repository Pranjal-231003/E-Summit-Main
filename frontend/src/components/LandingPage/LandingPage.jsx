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
        <div className='Page_container'>
            <div className='rectangle'></div>
            <nav className='navbar'>
              <img src={logo} alt="" />
   
            </nav>
            <h1>E-SUMMIT</h1>
            
            

        </div>
        
    </>
  )
}

export default LandingPage