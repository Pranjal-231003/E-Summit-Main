import React from "react";
import "./Ourteam.css";
import Team_Card from "./TeamCard/Team_Card";
// import { IconName } from "react-icons/hi2";
import { HiArrowDown } from "react-icons/hi2";
import { HiArrowUp } from "react-icons/hi2";
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";
import { summitMembers } from "./Members";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import ourTeam from "./Images/generate-a-blue-colour-scheme-background-image-for--our-team--page-heading-of-a-website 1.png";

const sections = [
  { title: "OUR HEAD", members: summitMembers.slice(0, 1), id: "head" },
  {
    title: "OUR COORDINATOR",
    members: summitMembers.slice(1, 2),
    id: "coordinator",
  },
  {
    title: "FINANCE CONVENOR",
    members: summitMembers.slice(2, 3),
    id: "finance",
  },
  {
    title: "TECH TEAM",
    lead: summitMembers.slice(4, 5),
    team: summitMembers.slice(5, 11),
    id: "tech",
  },
  {
    title: "SPONSORSHIP TEAM",
    lead: summitMembers.slice(11, 12),
    team: summitMembers.slice(12, 18),
    id: "sponsor",
  },
  {
    title: "CREATIVE TEAM",
    lead: summitMembers.slice(18, 20),
    team: summitMembers.slice(20, 21),
    id: "creative",
  },
  {
    title: "PR TEAM",
    lead: summitMembers.slice(21, 23),
    team: summitMembers.slice(23, 30),
    id: "pr",
  },
  {
    title: "CONTENT TEAM",
    lead: summitMembers.slice(30, 31),
    team: summitMembers.slice(31, 37),
    id: "content",
  },
];

const OurTeam = () => {
  const [showSection, setShowSection] = useState({});

  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {

      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "black",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "none",
          },
        },
        modes: {
          push: {
            quantity: 1.1,
          },
          repulse: {
            distance: 200,
            duration: 0.9,
          },
        },
      },
      particles: {
        color: {
          value: "ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 200,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 0.3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 40,
          max: 150,
        },
        opacity: {
          value: 0.3,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 2, max: 5 },
        },
        zIndex : {
          value: -1,
        },
      },
      detectRetina: true,
    }),
    [],
  );

  const handleToggleSection = (sectionId) => {
    setShowSection((prevState) => ({
      ...prevState,
      [sectionId]: !prevState[sectionId],
    }));
  };

  return (
    <div className="ourteam-container">

      <Particles
              id="tsparticles"
              particlesLoaded={particlesLoaded}
              options={options}
            />
      <div className="ourteam-img">

        <img src={ourTeam} alt="" />
      </div>

      {sections.map(({ title, members, lead, team, id }) => (
        
        <div key={id}>

          <h1 className="text-head">{title}</h1>
          <div className="tagline">
            <h1>THE ONE WHO RULES</h1>
          </div>

          <div className="team-row">
            {members &&
              members.map((member) => (
                <Team_Card key={member.id} {...member} />
              ))}
          </div>

          {lead && (
            <div className="team-row">
              {lead.map((member) => (
                <Team_Card key={member.id} {...member} />
              ))}
            </div>
          )}

          <AnimatePresence>
            {showSection[id] && (
              <motion.div
                className="team-row"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
              >
                {team &&
                  team.map((member) => (
                    <Team_Card key={member.id} {...member} />
                  ))}
              </motion.div>
            )}
          </AnimatePresence>

          {lead && team && (
            <div
              className="toggle-button"
              onClick={() => handleToggleSection(id)}
              
            >
               
              {showSection[id] ? (
                <HiArrowUp style={{ fontSize: "1.5rem" }} />
              ) : (
                <HiArrowDown />
              )}
            </div>
          )}
          <hr className="section-line" />
        </div>
        
      ))}


    </div>
    
  );
};

export default OurTeam;
