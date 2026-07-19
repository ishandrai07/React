
import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {

  const [theme, settheme] = useState('light')
 
  return (
    <div>
      <h1>theme is {theme}</h1>
      <Navbar theme={theme} settheme = {settheme}/>
    </div>
  )
}

export default App

// ******IN THESE WE HAVE SEND PROP FROM CHILD TO PARENT******