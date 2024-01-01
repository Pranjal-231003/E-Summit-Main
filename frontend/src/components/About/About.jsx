// About.jsx
import React, { useEffect } from 'react';
import "./About.css";
import crystal from "../images/modified_logo.png";
import calendar from "../images/calendar.png";
import clip from "../images/clip.png";
import coin from "../images/coin.png";
import money from "../images/money.png";
import people from "../images/people.png";
import withCursor from '../Cursor/Cursor'; 
import VanillaTilt from 'vanilla-tilt';
import { forwardRef } from "react";
const About =forwardRef( (props,ref) => {
  
  useEffect(() => {
    // Any additional setup code you might need for the About component
    // ...

    return () => {
      // Cleanup code if needed
      // ...
    };
  }, []); // Empty dependency array for componentDidMount behavior
  useEffect(() => {
    const tiltOptions = {
      glare: true,
      reverse: true,
      'max-glare': 0.15,
    };
    VanillaTilt.init(document.querySelectorAll('.about_img'), tiltOptions);
  }, []);
  return (
    <>
      <div id="about_container" ref={ref}>
        <div className='about_about'>ABOUT E-SUMMIT</div>

        <div className='about_box'>
          <div className='about_boxes'>
            <div className='about_box1'><img src={crystal} alt="img" className='about_img' /></div>
            <div className='about_box2'>
              <div className='about_text'><p className='text-element'>Lorem ipsum dolor sit amet consectetur. Velit ac pharetra tincidunt.
              Lorem ipsum dolor sit  pharetra tincidunt.Lorem ipsum dolor sit amet consectetur. Velit ac pharetra tincidunt.Lorem ipsum dolor sit amet consectetur. Velit ac pharetra tincidunt.</p></div>
            </div>
          </div>
          <div id="figures_container">
        <div className='about_about about_fig'>FIGURES</div>
      
          <div className="figures">
            <div className="clips">
              <img src={clip} alt="" srcset="" />
              <img src={clip} alt="" srcset="" />
              <img src={clip} alt="" srcset="" />
              <img src={clip} alt="" srcset="" />
            </div>
            <div className='figures_box'>
              <div className='figures_box1'>
                <div className='figures_img'><img src={coin} alt="img" /></div>
                <div className='figures_heading'>25L+</div>
                <div className='figures_text'>Raised in last<br />Shark Tank</div>
              </div>
              <div className='figures_line'></div>
              <div className='figures_box1'>
                <div className='figures_img'><img src={calendar} alt="img" /></div>
                <div className='figures_heading'>10+</div>
                <div className='figures_text'>Events</div>
              </div>
              <div className='figures_line'></div>
              <div className='figures_box1'>
                <div className='figures_img'><img src={people} alt="img" /></div>
                <div className='figures_heading'>4+</div>
                <div className='figures_text'>Workshops</div>
              </div>
              <div className='figures_line'></div>
              <div className='figures_box1'>
                <div className='figures_img'><img src={money} alt="img" /></div>
                <div className='figures_heading'>7+</div>
                <div className='figures_text'>Investors</div>
              </div>
            </div>
          </div>
       </div>
        </div>
      </div>
    </>
  );
})

export default withCursor(About); // Wrap the component with the withCursor HOC
