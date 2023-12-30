// Rocket.js

import React from 'react';
import './Competitions.css';
import Spline from '@splinetool/react-spline';

import Card from './Card/card';
import ash from "../images/ashneer.png";
const Competitions = () => {
  const competitionsData = [
    {
      imageUrl: ash,
      title: "ASHNEER GROVER TALK",
      time: "TIME-6PM",
      venue: "VENUE-OAT",
    },
    {
      imageUrl: ash,
      title: "ASHNEER GROVER TALK",
      time: "TIME-6PM",
      venue: "VENUE-OAT",
    },
    {
      imageUrl: ash,
      title: "ASHNEER GROVER TALK",
      time: "TIME-6PM",
      venue: "VENUE-OAT",
    },
    {
      imageUrl: ash,
      title: "ASHNEER GROVER TALK",
      time: "TIME-6PM",
      venue: "VENUE-OAT",
    },
    {
      imageUrl: ash,
      title: "ASHNEER GROVER TALK",
      time: "TIME-6PM",
      venue: "VENUE-OAT",
    },
    {
      imageUrl: ash,
      title: "ASHNEER GROVER TALK",
      time: "TIME-6PM",
      venue: "VENUE-OAT",
    }
  ];

  return (
    <div className='main'>
     <div className='splinemodel'>
      <div className='overlay-text1'>
        <h1>COMPET&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ITIONS</h1>
      </div>
      <div className='overlay-text2'>
        <h1>COMPET&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ITIONS</h1>
      </div>
      <Spline className='splines' scene="https://prod.spline.design/5d1cMbEhisQ1tPpS/scene.splinecode" />
    </div>
      <div className="competition-container">

        {competitionsData.map((competition, index) => (
          <Card
            key={index}
            imageUrl={competition.imageUrl}
            title={competition.title}
            time={competition.time}
            venue={competition.venue}
          />
        ))}
      </div>
    </div>



  );
};

export default Competitions;
