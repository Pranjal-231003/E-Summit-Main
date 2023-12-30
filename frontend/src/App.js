import React, { useState, useEffect } from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import Preloader from "./components/Preloader/Preloader";
import Events from "./components/Events/Events";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Sponsors from "./components/Sponsors/Sponsors";
import Competitions from "./components/Competitions/Competitions";
import CompetitionsLoader from "./components/Competitions/Preloader/preloader"
import Footer from "./components/Footer/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [loader, setLoader] = useState(true);
  const [competitionsLoader, setCompetitionsLoader] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoader(false);
    }, 7000);

    // Clear the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);

  // Simulate a delay for competitions preloader
  useEffect(() => {
    const competitionsTimeout = setTimeout(() => {
      setCompetitionsLoader(false);
    }, 5000);

    // Clear the timeout to avoid memory leaks
    return () => clearTimeout(competitionsTimeout);
  }, []);

  return (
    <>
          <Router>{loader ? (
                    <Preloader />
                  ) : (
            <Navbar />)}
            <Routes>
              <Route
                path="/"
                element={
                  loader ? (
                    <Preloader />
                  ) : (
                  <div id="home">
                    <LandingPage />
                    <About></About>
                    <Events />
                    <Footer />
                  </div>
                  )
                }
              />

              <Route
                path="/Competitions"
                element={
                  competitionsLoader ? (
                    <CompetitionsLoader />
                  ) : (
                    <Competitions />
                  )
                }
              />
              <Route path="/Sponsors" element={<Sponsors />} />
            </Routes>
          </Router>
      
    </>
  );
}

export default App;
