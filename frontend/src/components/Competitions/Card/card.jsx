
import React, { useEffect } from 'react';
import './card.css';
import VanillaTilt from 'vanilla-tilt';
import { MdArrowOutward } from 'react-icons/md';

const Card = ({ imageUrl, title, time, venue }) => {
  useEffect(() => {
    const tiltOptions = {
      glare: true,
      reverse: true,
      'max-glare': 0.15,
    };
    VanillaTilt.init(document.querySelectorAll('.card'), tiltOptions);
  }, []);

  return (
    <div className="card">
      <img alt="" className="card-image" src={imageUrl} />
      <div className="card-text">
        <h2>{title}</h2>
        <p className="desc">{time} <br /><br /> {venue}</p>
        <a href="" className="register">
          Register &nbsp;
          <MdArrowOutward className="arrow"/>
        </a>
      </div>
    </div>
  );
};

export default Card;
