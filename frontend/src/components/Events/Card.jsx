import React from "react";
import "./events.css";

export default function Card({ imageUrl, title, description1, description2, one }) {
    
  return (
    <div className="card-container">
      <img alt="" className="card-img" src={imageUrl} />
      <div className="corner-image top-left"></div>
      <div className="corner-image top-right"></div>
      <div className="corner-image bottom-left"></div>
      <div className="corner-image bottom-right"></div>
      <div className="card-text">
        <h1 className="title">{title}</h1>
        <p className="desc">{one}</p>
        <p className="desc">{description1} <br /> {description2}</p>
      </div>
    </div>
  );
}
