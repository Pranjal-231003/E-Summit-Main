import React from 'react';
import "./events.css";
import Card from './Card';
import ash from "../images/ashneer.png";
import amit from "../images/amitjain.png";
import edm from "../images/edmnight.png";
import talk from "../images/talkshow.png";
import w1 from "../images/workshop1.jpg";
import w2 from "../images/workshop2.jpg";

function Events() {
  const eventsData = [
    {
      imageUrl: ash,
      title: "ASHNEER GROVER TALK",
      description1: "TIME-6PM",
      description2: "VENUE-OAT",
      one: " Voluptatum quis facere consequatur cumque quaerat culpa aperiam deleniti, nulla, sint rem non!"
    },
    {
        imageUrl: amit,
        title: "ASHNEER GROVER TALK",
        description1: "TIME-6PM",
        description2: "VENUE-OAT",
        one: " Voluptatum quis facere consequatur cumque quaerat culpa aperiam deleniti, nulla, sint rem non!"
      },
      {
        imageUrl: edm,
        title: "ASHNEER GROVER TALK",
        description1: "TIME-6PM",
        description2: "VENUE-OAT",
        one: " Voluptatum quis facere consequatur cumque quaerat culpa aperiam deleniti, nulla, sint rem non!"
      },
      {
        imageUrl: talk,
        title: "ASHNEER GROVER TALK",
        description1: "TIME-6PM",
        description2: "VENUE-OAT",
        one: " Voluptatum quis facere consequatur cumque quaerat culpa aperiam deleniti, nulla, sint rem non!"
      },
      {
        imageUrl: w1,
        title: "ASHNEER GROVER TALK",
        description1: "TIME-6PM",
        description2: "VENUE-OAT",
        one: " Voluptatum quis facere consequatur cumque quaerat culpa aperiam deleniti, nulla, sint rem non!"
      },
      {
        imageUrl: w2,
        title: "ASHNEER GROVER TALK",
        description1: "TIME-6PM",
        description2: "VENUE-OAT",
        one: " Voluptatum quis facere consequatur cumque quaerat culpa aperiam deleniti, nulla, sint rem non!"
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
          one={event.one}
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
