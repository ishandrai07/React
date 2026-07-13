import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full w-1/3 rounded-4xl relative shrink-0 overflow-hidden '>
        <img className='h-full  object-cover rounded-4xl overflow-hidden' src={props.img}></img>

        <RightCardContent id={props.id} tag={props.tag} color={props.color}/>
    </div>
  )
}

export default RightCard