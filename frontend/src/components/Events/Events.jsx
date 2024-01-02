import React from 'react';
import "./events.css";
import Card from './Card';
import ash from "../images/ashneer.png";

function Events() {
  const eventsData = [
    {
      imageUrl: ash,
      title: "ASHNEER GROVER TALK",
      description1: "TIME-6PM",
      description2: "VENUE-OAT",
    },
    {
        imageUrl: ash,
        title: "ASHNEER GROVER TALK",
        description1: "TIME-6PM",
        description2: "VENUE-OAT",
      },
      {
        imageUrl: ash,
        title: "ASHNEER GROVER TALK",
        description1: "TIME-6PM",
        description2: "VENUE-OAT",
      },
      {
        imageUrl: ash,
        title: "ASHNEER GROVER TALK",
        description1: "TIME-6PM",
        description2: "VENUE-OAT",
      },
      {
        imageUrl: ash,
        title: "ASHNEER GROVER TALK",
        description1: "TIME-6PM",
        description2: "VENUE-OAT",
      },
      {
        imageUrl: ash,
        title: "ASHNEER GROVER TALK",
        description1: "TIME-6PM",
        description2: "VENUE-OAT",
      }
      ,
      {
        imageUrl: ash,
        title: "ASHNEER GROVER TALK",
        description1: "TIME-6PM",
        description2: "VENUE-OAT",
      },
      {
        imageUrl: ash,
        title: "ASHNEER GROVER TALK",
        description1: "TIME-6PM",
        description2: "VENUE-OAT",
      }
  ];

  return (
    <>
    <div id="Events_container">
    <div id='Events'>
        <h1 className='evh'><span className="text_s">EVENTS</span></h1>
        <div className="events-container"> 

        <div className="events-grid">
      {eventsData.map((event, index) => (
        <Card
          key={index}
          imageUrl={event.imageUrl}
          title={event.title}
          description1={event.description1}
          description2={event.description2}
        />
      ))}
  </div>
    </div>
    </div>
    </div>
    </>
  );
}

export default Events;
