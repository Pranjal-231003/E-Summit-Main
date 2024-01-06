import React from 'react';
import './Sponsors.css'; // Import your CSS file for rocket styles
import Spline from '@splinetool/react-spline';

const Sponsors = () => {
  return (
    <div className='main'>
        <div className='splinemodel'>
            <Spline scene="https://prod.spline.design/nnzeUzYoO22aP0An/scene.splinecode" />
          {/* https://prod.spline.design/nnzeUzYoO22aP0An/scene.splinecode */}
        </div>
    </div>
  );
};

export default Sponsors;
