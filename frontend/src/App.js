import React, { useState, useEffect } from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import Preloader from "./components/Preloader/Preloader";
import Events from "./components/Events/Events";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Competitions from "./components/Competitions/Competitions";
import "./App.css";
import { Toaster } from "react-hot-toast";
import {
  BrowserRouter as Router,
  Route,
  Routes, useNavigate ,
} from "react-router-dom";

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoader(false);
    }, 7000);

    // Clear the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loader ? (
        <Preloader />
      ) : (
        <>
          <Router>
            <Toaster />

            <Navbar />
            <Routes>
              <Route
                path="/"
                element={
                  <div id="home">
                    <LandingPage/>
                    <About></About>
                    <Events/>
                  </div>
                }
              />

              <Route path="/Competitions" element={<Competitions/>} />
            </Routes>
          </Router>
        </>
      )}
    </>
  );
}

export default App;
