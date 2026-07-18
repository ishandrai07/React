import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
let navigate =  useNavigate()

  return (
    <div>
        <button onClick={()=>{navigate('/')}} className='m-2 px-5 py-2 bg-emerald-700 active:scale-95 rounded '>Return to home</button>

        <button onClick={()=>{navigate(-1)}} className='m-2 px-5 py-2 bg-emerald-700 active:scale-95 rounded '>Back</button>

        <button onClick={()=>{navigate(+1)}} className='m-2 px-5 py-2 bg-emerald-700 active:scale-95 rounded '>Next</button>
    </div>
  )
}

export default Navbar2