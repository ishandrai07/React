import React from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'


const App = () => {





  return (
    
    <div>

      <div className='nav'>

      <h3>ISHAND RAI</h3>

      <div className='routes1'>
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/Contact'>Contact</Link>
      </div>

      </div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Contact' element={<Contact/>} />  
      </Routes>
    </div>
  )
}

export default App