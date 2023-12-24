import React from 'react'

function Text(props) {
  return (

    <>
    <div style={props.style}className="option"><a href="#">{props.value}</a></div>

    </>
    
  )
}

export default Text