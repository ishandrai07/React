import React from 'react'

function Card(props) {
  return (
    <div >
    <div className='card'>
        <img src={props.img}></img>
        <h1>{props.user}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <button>View More</button>
    </div>
    </div>
  )
}

export default Card