import React, { useContext } from 'react'
import { ThemeDatacontext } from '../context/ThemeContext'

const Button = () => {

    const [theme,settheme] = useContext(ThemeDatacontext)

    const ChangeTheme = () => {
        settheme('dark')
    }
  return (
    <div>
        <button onClick={ChangeTheme}>Change Theme</button>
    </div>
  )
}

export default Button