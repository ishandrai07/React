import React, { useEffect, useState } from 'react'

const App = () => {

  const [num1, setnum1] = useState(0)
  const [num2, setnum2] = useState(0)

  useEffect(() => {
    
  console.log("useeffect is running.....");
  
   
  }, [num1])
  

  return (
    <>
    <div>
      <h1>{num1},{num2}</h1>
      <button onClick={function(){setnum1(num1+1)}}>click</button>
      <button onClick={function(){setnum2(num2-1)}}>click</button>
    </div>
    </>
  )
}

export default App