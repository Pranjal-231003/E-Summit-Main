// Rocket.js

import React from 'react';
import './Competitions.css'; // Import your CSS file for rocket styles
import Spline from '@splinetool/react-spline';


const Competitions = () => {
  return (
    <div className='main'>
        <div className='splinemodel' >
        <Spline className='splines' scene="https://prod.spline.design/5d1cMbEhisQ1tPpS/scene.splinecode" />
    </div>
    {/* <div className='heading'> */}
        {/* <h1>comp</h1> */}
    {/* </div> */}
    </div>
    


  );
};

export default Competitions;
