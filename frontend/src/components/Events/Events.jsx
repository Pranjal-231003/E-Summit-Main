import React from 'react';
import "./events.css";
import Card from './Card';
import ash from "../images/ashneer.png";
import amit from "../images/amitjain.png";
import edm from "../images/edmnight.png";
import talk from "../images/talkshow.png";
import w1 from "../images/workshop1.jpg";
import w2 from "../images/workshop2.jpg";
import r from "../images/R.png"
function Events() {
  const eventsData = [
    {
      imageUrl: r,
      title: "Speaker 1",
      description1: "TIME-6PM",
      description2: "VENUE-OAT",
      one: "Unlocking the Entrepreneurial Spirit: Insights to Navigate Business Frontiers."
    },
    {
        imageUrl: r,
        title: "Speaker 2",
        description1: "TIME-6PM",
        description2: "VENUE-OAT",
        one: "From Vision to Victory: Lessons in Entrepreneurial Leadership and Innovation."
      },
      {
        imageUrl: r,
        title: "Speaker 3",
        description1: "TIME-6PM",
        description2: "VENUE-OAT",
        one: "The Art of Disruption: Leveraging Entrepreneurial Insights for Growth and Impact."
      },
      {
        imageUrl: talk,
        title: "ASHNEER GROVER TALK",
        description1: "TIME-6PM",
        description2: "VENUE-OAT",
        one: "Startup building by experienced veterans"
      },
      {
        imageUrl: w1,
        title: "ASHNEER GROVER TALK",
        description1: "TIME-6PM",
        description2: "VENUE-OAT",
        one: "Practical knowledge by experienced entrepreneurs of real world"
      },
      {
        imageUrl: edm,
        title: "EDM NIGHT",
        description1: "TIME-6PM",
        description2: "VENUE-OAT",
        one: "Let the beats ignite your spirit at an electrifying EDM night!"
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
