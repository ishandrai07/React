import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Notfound from './pages/Notfound'
import Mens from './pages/Mens'
import Womens from './pages/Womens'
import Courses from './pages/Courses'
import CoursesDetails from './pages/CoursesDetails'

const App = () => {
  return (
    <div>

      <div className='h-screen bg-black text-amber-50'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />

          //NESTED ROUTE
          <Route path='/product' element={<Product />} >
          <Route path='mens' element={<Mens />} />
          <Route path='womens' element={<Womens />} />
          </Route>

          <Route path='/courses' element={<Courses />} />
          <Route path='/courses/:id' element={<CoursesDetails />} />  // Dynamic routing
          
          <Route path='*' element={<Notfound />} />
        </Routes>
        <Footer />
      </div>

    </div>
  )
}

export default App