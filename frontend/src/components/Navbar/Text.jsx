import React from 'react';
import { Link } from 'react-router-dom';

function Text(props) {
  const handleClick = (event) => {
    if (props.container) {
      const targetElement = document.querySelector(props.container);
      
      if (targetElement) {
        // Scroll to the target container
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }

    if (props.onClick) {
      props.onClick();
    
    }

  };
  

  return (
    <div style={props.style} className={`option ${props.page ? 'inactive-link' : ''}`} onClick={handleClick}>
      <Link to={props.container}>{props.value}</Link>
    </div>
  );
}

export default Text;
