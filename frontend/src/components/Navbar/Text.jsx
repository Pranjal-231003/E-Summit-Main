import React from 'react'
import {Link} from "react-router-dom"
function Text(props) {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };
  return (
    

    <>
    <div style={props.style}className="option"><Link to={props.container} onClick={handleClick}>{props.value}</Link></div>

    </>
    
  )
}

export default Text