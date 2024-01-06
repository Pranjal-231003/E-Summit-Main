import React, { useState, useEffect } from 'react';
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Team_Card = ({ name, title, photo, gmail, linkedin }) => {

  
  const [gmailClicked, setGmailClicked] = useState(false);
  const [linkedinClicked, setLinkedinClicked] = useState(false);

  useEffect(() => {
    if (gmailClicked) {
      window.location.href = `mailto:${gmail}`;
      setGmailClicked(false); // Reset the state
    }
  }, [gmailClicked, gmail]);

  const openLinkedInProfile = () => {
    if (!linkedinClicked) {
      const url = `${linkedin}`;
      window.open(url, '_blank');
      setLinkedinClicked(true); // Reset the state
    }
  };
  

  return (
    <div className="team_card">
      <img src={photo} alt={name} className="team_photo" />
     
      <div className="team_icons">
      <div className="gmail" onClick={() => setGmailClicked(true)}>
      <SiGmail style={{ fontSize: "1.6em" }} />
      </div>
      <div className="instagram" >
      <FaInstagram  style={{ fontSize: "1.6em" }} />
      </div>
      <div className="linkedin" onClick={openLinkedInProfile}>
     
      <FaLinkedin style={{ fontSize: "1.6em"}}/>
      </div>
      </div>
      <div className="team_info">
        <h3 className="team_name">{name}</h3>
        <p className="team_title">{title}</p>
      </div>  
    </div>
  );
};

export default Team_Card;
