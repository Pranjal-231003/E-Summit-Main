import React from 'react';
import './Sponsors.css'; // Import your CSS file for rocket styles
import Spline from '@splinetool/react-spline';

const Sponsors = () => {
  return (
    <div id='sponsor' className='main'>
      {/* <div className='mains'> */}

        <div className='splimod'>
            <Spline className='spli'  scene="https://prod.spline.design/nnzeUzYoO22aP0An/scene.splinecode" />
          {/* https://prod.spline.design/nnzeUzYoO22aP0An/scene.splinecode */}
        </div>
      </div>
    // </div>
  );
};

export default Sponsors;
