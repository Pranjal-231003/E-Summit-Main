// Rocket.js

import React from "react";
import "./Competitions.css";
import Spline from "@splinetool/react-spline";
import withCursor from "../Cursor/Cursor";
import Card from "./Card/card";
import expo from "../images/STARTUP_ EXPO1.png";
import shark from "../images/shark tank.png";
import ideathon from "../images/Post3.png";
// import wolf from "../images/THE WOLF OF DALAL STREET.png";
import quiz from "../images/BIZ QUIZ.png";
const Competitions = () => {
  const competitionsData = [
    {
      imageUrl: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/f_auto/v1704745249/esummit/STARTUP__EXPO1_qfpsnt.png',
      title: "Start-Up Expo",
      description:
        "LNMIIT Startup Expo: Igniting sparks of ideas, propelling innovations to greater heights!",
      time: "TIME-TBD",
      venue: "VENUE-TBD",
      register:
        "https://unstop.com/conferences/startup-expo-e-summit-lnm-institute-of-information-technology-lnmiit-jaipur-849058",
    },
    {
      imageUrl: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/f_auto/v1704745250/esummit/shark_tank_pbvfqv.png',
      title: "Shark Tank",
      description:
        "Dive into innovation with Shark Tank  at E-Summit, where ideas surface and pitches make a splash!",
      time: "TIME-TBD",
      venue: "VENUE-TBD",
      register:
        "https://unstop.com/competitions/shark-tank-e-summit-lnm-institute-of-information-technology-lnmiit-jaipur-849015",
    },
    {
      imageUrl: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/f_auto/v1704745252/esummit/Post3_lsrena.png',
      title: "Ideathon",
      description:
        "Ideas ignite, innovation excites: Fueling the future at E-Summit LNMIIT's Kickstart Ideathon",
      time: "TIME-TBD",
      venue: "VENUE-TBD",
      register:
        "https://unstop.com/competitions/ideathon-e-summit-lnm-institute-of-information-technology-lnmiit-jaipur-847782",
    },
    {
      imageUrl: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/f_auto/v1704745251/esummit/THE_WOLF_OF_DALAL_STREET_ulgode.png',
      title: "The Wolf of Dalal Street",
      description:
        "Master the Wall Street Bull: Dive into stock market investing with savvy decision-making!",
      time: "TIME-TBD",
      venue: "VENUE-TBD",
      register: "",
    },
    {
      imageUrl: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/f_auto/v1704745244/esummit/BIZ_QUIZ_lbz9eu.png',
      title: "Biz Quiz",
      description:
        "Exciting Quiz testing your entrepreneurial brilliance and business intelligence",
      time: "TIME-TBD",
      venue: "VENUE-TBD",
      register: "",
    },
  ];

  let competitionText = "";
  if (window.innerWidth !== null) {
    competitionText =
      window.innerWidth < 640
        ? "COMPETITIONS"
        : window.innerWidth > 745
        ? "COMPET\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0ITIONS"
        : "COMPET\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0ITIONS";
  }

  return (
    <div className="main">
      <div className="splinemodel">
        <div className="overlay-text1">
          <h1>
            {window.innerWidth > 745
              ? "COMPET\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0ITIONS"
              : "COMPET\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0ITIONS"}
          </h1>
        </div>
        <div className="overlay-text2">
          <h1>{competitionText}</h1>
        </div>
        <div className="overlay-text3">
          <h1>
            {window.innerWidth > 745
              ? "COMPET\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0ITIONS"
              : "COMPET\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0ITIONS"}
          </h1>
        </div>
        <Spline
          className="splines"
          scene="https://prod.spline.design/5d1cMbEhisQ1tPpS/scene.splinecode"
        />
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
            register={competition.register}
          />
        ))}
      </div>
    </div>
  );
};

export default Competitions;
