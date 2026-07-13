import React from 'react'

const RightCardContent = (props) => {
  return (
    <div>
        <div className='absolute  top-0 left-0 h-full w-full p-4 flex flex-col justify-between text-amber-50'>
            <h2 className='bg-white rounded-full h-10 w-10 text-black flex justify-center items-center font-bold'>{props.id+1}</h2>

            <div className='font-bold'>
                <p  className='text-lg leading-normal mb-7 text-shadow-2xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, neque minus. Tempore sunt sint aliquid officia!</p>

                <div className='flex justify-between'>
                    <button style={{backgroundColor:props.color}} className=' rounded-full px-8 py-3 cursor-pointer'>{props.tag}</button>
                    <button style={{backgroundColor:props.color}} className=' rounded-full px-3 py-3 cursor-pointer'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>


        </div>
    </div>
  )
}

export default RightCardContent