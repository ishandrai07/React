import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [first, setfirst] = useState([])
  const getData = async ()=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/')

    // console.log(response.data);
    setfirst(response.data)
    
  }

  return (
    <div>
      <button onClick={getData}>click</button>
      <div>
        {first.map(function(elem,idx){
          return <h1>hello{idx}</h1>
        })}
      </div>
    </div>
  )
}

export default App