import React from 'react'

function Text(props) {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };
  return (
    

    <>
    <div style={props.style}className="option"><a href={props.container} onClick={handleClick}>{props.value}</a></div>

    </>
    
  )
}

export default Text