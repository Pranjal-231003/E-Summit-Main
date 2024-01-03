import React, { useState, useEffect } from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import Preloader from "./components/Preloader/Preloader";
import Events from "./components/Events/Events";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Sponsors from "./components/Sponsors/Sponsors";
import Contact from "./components/Contact/Contact";
import Competitions from "./components/Competitions/Competitions";
import CompetitionsLoader from "./components/Competitions/Preloader/preloader";
import Footer from "./components/Footer/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useRef } from "react";
import OurTeam from '../src/components/OurTeam/OurTeam';
import "./App.css"

import ResponsiveNav from "./components/ResponsiveNav/ResponsiveNav";
import "./App.css";


function App() {
  const AboutRef = useRef(null);
  const [loader, setLoader] = useState(true);
  const [competitionsLoader, setCompetitionsLoader] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoader(false);
    }, 7000);

    return () => clearTimeout(timeout);
  }, []);

  // Simulate a delay for competitions preloader
  useEffect(() => {
    const competitionsTimeout = setTimeout(() => {
      setCompetitionsLoader(false);
    }, 5000);

    return () => clearTimeout(competitionsTimeout);
  }, []);

  return (
    <>
      <Router>
        {!loader && <><ResponsiveNav /> <Navbar Aboutref={AboutRef}/></>}
        <Routes>
          <Route
            path="/"
            element={
              loader ? (
                <Preloader />
              ) : (
                <div id="home">
                  <LandingPage />
                  <About ref={AboutRef}></About>
                  <Events />
                  <Contact />
                  <Footer />
                </div>
              )
            }
          />

          <Route path="/Competitions" element={
              competitionsLoader ? (
                <CompetitionsLoader />
              ) : (
                <Competitions />
              )
            }
          />
          <Route path="/Sponsors" element={competitionsLoader ? (
                <CompetitionsLoader />
              ) : (
                <Sponsors />
              )} />
               <Route path="/team" element={<OurTeam />} />
        </Routes>
       
      </Router>
    </>
  );
}

export default App;
