import React from 'react';
import calendar from "../images/calendar.png";
import clip from "../images/clip.png";
import coin from "../images/coin.png";
import money from "../images/money.png";
import people from "../images/people.png";
import "./Figures.css";

const Figures = () => {
  return (
    <div className='figures_box'>
      <div className='figures_box1'>
        <div className='figures_img'><img src={ coin } alt="img" /></div>
        <div className='figures_heading'>25L+</div>
        <div className='figures_text'>Raised in last Shark Tank</div>        
      </div>
      <div className='figures_line'></div>

    </div>
  )
}

export default Figures