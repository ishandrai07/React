import React from 'react'

const Navbar = (props) => {
    function chnageTheme(){
        props.settheme('Dark')
    }
    
  return (
    <div>
        
        <button onClick={chnageTheme}>click</button>
    </div>
  )
}

export default Navbar