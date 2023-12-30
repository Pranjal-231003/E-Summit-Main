// Competition.jsx
import React from 'react';
import Card from './Card/card';
import ash from "../images/ashneer.png";
import "./competition.css"
const Competition = () => {
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
  );
};

export default Competition;
