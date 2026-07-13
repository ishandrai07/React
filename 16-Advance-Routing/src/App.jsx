import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from '../../15-React-Rounter-Dom/src/pages/Home'
import About from '../../15-React-Rounter-Dom/src/pages/About'
import Contact from '../../15-React-Rounter-Dom/src/pages/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App