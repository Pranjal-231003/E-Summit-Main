import React from 'react';
import './Sponsors.css'; // Import your CSS file for rocket styles
import Spline from '@splinetool/react-spline';

const Sponsors = () => {
  return (
    <div className='main'>
        <div className='splinemodel'>
          <div style={{width: 100+"vw", height:100+"vh", marginLeft: -40 + "vw"}}>
            <Spline scene="https://prod.spline.design/nnzeUzYoO22aP0An/scene.splinecode" />
          </div>
          {/* https://prod.spline.design/nnzeUzYoO22aP0An/scene.splinecode */}
        </div>
    </div>
  );
};

export default Sponsors;
