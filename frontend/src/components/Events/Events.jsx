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
      imageUrl: 'https://res.cloudinary.com/dr0b2iifb/image/upload/v1704993566/REV4_klv16m.png',
      title: "Speaker 1",
      description1: "TIME-TBD",
      description2: "VENUE-TBD",
      one: "Unlocking the Entrepreneurial Spirit: Insights to Navigate Business Frontiers."
    },
    // https://res.cloudinary.com/dr0b2iifb/image/upload/v1704993566/REV4_klv16m.png
    {
        imageUrl: 'https://res.cloudinary.com/dr0b2iifb/image/upload/v1704993566/REV4_klv16m.png',
        title: "Speaker 2",
        description1: "TIME-TBD",
        description2: "VENUE-TBD",
        one: "From Vision to Victory: Lessons in Entrepreneurial Leadership and Innovation."
      },
      {
        imageUrl: 'https://res.cloudinary.com/dr0b2iifb/image/upload/v1704993566/REV4_klv16m.png',
        title: "Speaker 3",
        description1: "TIME-TBD",
        description2: "VENUE-TBD",
        one: "The Art of Disruption: Leveraging Entrepreneurial Insights for Growth and Impact."
      },
      {
        imageUrl: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/f_auto/v1704745251/esummit/workshop1_tqbgek.jpg',
        title: "Workshop - 1",
        description1: "TIME-TBD",
        description2: "VENUE-TBD",
        one: "Startup building by experienced veterans"
      },
      {
        imageUrl: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/f_auto/v1704745251/esummit/workshop2_joyqmx.jpg',
        title: "Workshop - 2",
        description1: "TIME-TBD",
        description2: "VENUE-TBD",
        one: "Practical knowledge by experienced entrepreneurs of real world"
      },
      {
        imageUrl: edm,
        title: "Pronite",
        description1: "TIME-TBD",
        description2: "VENUE-TBD",
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
