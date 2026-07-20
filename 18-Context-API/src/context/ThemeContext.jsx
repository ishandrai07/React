import { createContext, useState } from "react"


export const ThemeDatacontext = createContext();

const ThemeContext = (props) => {
  const [theme, settheme] = useState('light')
  return (

    <div>
       
            <ThemeDatacontext.Provider value={[theme,settheme]}>
              {props.children}
            </ThemeDatacontext.Provider>
        
    </div>
  )
}

export default ThemeContext