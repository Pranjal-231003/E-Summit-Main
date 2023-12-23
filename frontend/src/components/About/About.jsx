import React from 'react';
import "./About.css";
import crystal from "../images/crystal.png";
import calendar from "../images/calendar.png";
import clip from "../images/clip.png";
import coin from "../images/coin.png";
import money from "../images/money.png";
import people from "../images/people.png";

const About = () => {
  return (
    <>
      <div className='about_about'>ABOUT E-SUMMIT</div>

        <div className='about_box'>
          <div className='about_boxes'>
            <div className='about_box1'>
              <div className='about_img'><img src={ crystal } alt="img" /></div>
            </div>
            <div className='about_box2'>
              <div className='about_text'>Lorem ipsum dolor sit amet consectetur. Velit ac pharetra tincidunt.
              Lorem ipsum dolor sit  pharetra tincidunt.Lorem ipsum dolor sit amet consectetur. Velit ac pharetra tincidunt.Lorem ipsum dolor sit amet consectetur. Velit ac pharetra tincidunt.
              </div>
            </div>
          </div>

        <div className='figures_box'>
          <div className='figures_box1'>
            <div className='figures_img'><img src={ coin } alt="img" /></div>
            <div className='figures_heading'>25L+</div>
            <div className='figures_text'>Raised in last<br />Shark Tank</div>        
          </div>
          <div className='figures_line'></div>
          <div className='figures_box1'>
            <div className='figures_img'><img src={ calendar } alt="img" /></div>
            <div className='figures_heading'>10+</div>
            <div className='figures_text'>Events</div>        
          </div>
          <div className='figures_line'></div>
          <div className='figures_box1'>
            <div className='figures_img'><img src={ people } alt="img" /></div>
            <div className='figures_heading'>4+</div>
            <div className='figures_text'>Workshops</div>        
          </div>
          <div className='figures_line'></div>
          <div className='figures_box1'>
            <div className='figures_img'><img src={ money } alt="img" /></div>
            <div className='figures_heading'>7+</div>
            <div className='figures_text'>Investors</div>        
          </div>

        </div>
      </div>
    </>
  )
}

export default About