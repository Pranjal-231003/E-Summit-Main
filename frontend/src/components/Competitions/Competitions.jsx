// Rocket.js

import React from 'react';
import './Competitions.css';
import Spline from '@splinetool/react-spline';

import Card from './Card/card';
import expo from "../images/STARTUP_ EXPO1.png";
import shark from "../images/shark tank.png";
import ideathon from "../images/Post3.png";
import wolf from "../images/THE WOLF OF DALAL STREET.png";
import quiz from "../images/BIZ QUIZ.png";
const Competitions = () => {
  const competitionsData = [
    {
      imageUrl: expo,
      title: "ASHNEER GROVER TALK",
      description:"DESCRIPTION",
      time: "TIME-6PM",
      venue: "VENUE-OAT",
    },
    {
      imageUrl: shark,
      title: "ASHNEER GROVER TALK",
      description:"DESCRIPTION",
      time: "TIME-6PM",
      venue: "VENUE-OAT",
    },
    {
      imageUrl: ideathon,
      title: "ASHNEER GROVER TALK",
      description:"DESCRIPTION",
      time: "TIME-6PM",
      venue: "VENUE-OAT",
    },
    {
      imageUrl: wolf,
      title: "ASHNEER GROVER TALK",
      description:"DESCRIPTION",
      time: "TIME-6PM",
      venue: "VENUE-OAT",
    },
    {
      imageUrl: quiz,
      title: "ASHNEER GROVER TALK",
      description:"DESCRIPTION",
      time: "TIME-6PM",
      venue: "VENUE-OAT",
    }
  ];
  const competitionText = window.innerWidth < 640 ? 'COMPETITIONS' : window.innerWidth > 745 ? 'COMPET\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0ITIONS' : 'COMPET\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0ITIONS';

  return (
    <div className='main'>
     <div className='splinemodel'>
      <div className='overlay-text1'>
      <h1>{ window.innerWidth > 745 ? 'COMPET\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0ITIONS' : 'COMPET\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0ITIONS'}</h1>
      </div>
      <div className='overlay-text2'>
  <h1>{competitionText}</h1>
</div>
      <div className='overlay-text3'>
      <h1>{window.innerWidth > 745 ? 'COMPET\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0ITIONS' : 'COMPET\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0ITIONS'}</h1>
      </div>
      <Spline className='splines' scene="https://prod.spline.design/5d1cMbEhisQ1tPpS/scene.splinecode" />
    </div>
      <div className="competition-container">

        {competitionsData.map((competition, index) => (
          <Card
            key={index}
            imageUrl={competition.imageUrl}
            title={competition.title}
            description={competition.description}
            time={competition.time}
            venue={competition.venue}
          />
        ))}
      </div>
    </div>



  );
};

export default Competitions;