import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <div className='flex justify-center gap-10'>
        <Link to="/product/mens">Mens</Link>
        <Link to="/product/womens">Womens</Link>
      </div>
      <div>
      {/* <h1 className='text-4xl font-semibold absolute top-1/2 left-1/2 -translate-x-1/2'>Products Page</h1> */}
      <Outlet/>
    </div>
    </div>
  )
}

export default Product