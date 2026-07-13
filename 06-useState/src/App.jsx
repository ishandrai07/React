import React, { useState } from 'react'

const App = () => {

  const [num, setnum] = useState(1)


  return (

   
    <div>
      <h1>my num is {num}</h1>
      <button onClick={function(){setnum(num+1)}}>Click</button>
    </div>
  )
}

export default App