import React, { useEffect, useRef } from 'react';
import './Preloader.css';
import preloaderVideo from './preloader.mp4';

function Preloader() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    // Start bouncing animation after 5 seconds
    const bounceTimeout = setTimeout(() => {
      video.style.animation = 'bounceAnimation 2s ease-in-out infinite';
    }, 5000);

    return () => {
      clearTimeout(bounceTimeout);
    };
  }, []);

  return (
    <div className="page">
      <video ref={videoRef} width="100%" height="100%" autoPlay muted>
        <source src={preloaderVideo} type="video/mp4" />
      </video>
    
    </div>
  );
}

export default Preloader;
