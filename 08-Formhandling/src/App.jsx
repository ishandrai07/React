import React from 'react'

const App = () => {

  const submitHandler = (e)=>{
    e.preventDefault()                        // ise use krne se form submit console pr show hoga vrna form ka
                                              // default behaviour hota h jisme form submitted bs 1 sec k liye console pr aata h
    console.log("Form Submitted");
    
    
  }

  return (
    <div>
      <form onSubmit={function(e){
        submitHandler(e)
      }}>
        <input type='text' placeholder='Enter Your Name '/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App