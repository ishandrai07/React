
import { useContext } from 'react'
import Navbar2 from './Navbar2'
import { ThemeDatacontext } from '../context/ThemeContext'


const Navbar = (props) => {

const [theme,settheme] = useContext(ThemeDatacontext)
  return (
    <div className={theme}>
        <h2>Isahnd</h2>
        <Navbar2  />
    </div>
  )
}

export default Navbar