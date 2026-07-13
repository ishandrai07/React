import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState("")

  const submitHandle =(e)=>{
    e.preventDefault()
    console.log("Form is Submitted by", title);

    setTitle("")
    
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandle(e)
      }}>
        <input type='text' placeholder='enter your name' value={title} onChange={(e)=>{
          setTitle(e.target.value)
        }}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App