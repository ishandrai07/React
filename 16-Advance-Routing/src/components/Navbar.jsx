import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {


  return (
    <div>
        <div className='flex justify-between p-4 font-bold text-lg bg-blue-400 items-center'>
            <h2>Ishand Rai</h2>
        

        <div className='flex gap-20 '>
          
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/product'>Product</Link>
          <Link to='/courses'>Courses</Link>
        </div>
        </div>
    </div>
  )
}

export default Navbar