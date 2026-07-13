// import React from 'react'

// const App = () => {

// function btnClick(){
//   console.log("button clicked");
// }
//   return (
//     <div>
//       <button className='bg-gray-500 cursor-pointer' onClick={btnClick}>click me</button>
//     </div>
//   )
// }

// export default App

import React from 'react'

const App = () => {

  function inputChange(val){
    console.log(val)
  }

  return (
    <div>
      <input onChange={function(elem){inputChange(elem.target.value)}} type="text" placeholder='Enter your Name'/>
    </div>
  )
}

export default App