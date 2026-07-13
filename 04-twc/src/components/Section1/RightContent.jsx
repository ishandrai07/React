import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='RightContent' className='h-full w-3/4 p-4 mb-4 flex flex-nowrap gap-10 overflow-x-auto'>
      
      {props.users.map(function(elem,idx){


        return <RightCard key={idx} id={idx} img={elem.img} color={elem.color} tag={elem.tag}/>
      })}

    </div>
  )
}

export default RightContent


