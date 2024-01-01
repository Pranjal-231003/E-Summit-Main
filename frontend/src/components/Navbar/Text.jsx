import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Text(props) {
  const [set, setS] = useState(false);

  const handleClick = (event) => {
    if (props.container) {
      const targetElement = document.querySelector(props.container);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        event.preventDefault();
      }
    }

    if (props.onClick) {
      props.onClick();
    }
    console.log(props.page);
    if (props.page && props.value !== 'Competition' && props.value !== 'Sponsors') {
      setS(true);
    }
  };

  return (
    <div style={props.style} className={`option ${props.page ? 'inactive-link' : ''}`} onClick={handleClick}>
      <Link to={props.container}>{props.value}</Link>
    </div>
  );
}

export default Text;
