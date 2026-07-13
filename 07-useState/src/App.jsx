import React, { useState } from 'react'

// const App = () => {

//   const [num, setNum] = useState({user:'ishand', age:22})

//   function increase(){
//     const newNum = {...num}             // chnaging val of user , age using destructuring
//     newNum.user = 'rahul'
//     newNum.age = 19

//     setNum(newNum)
//   }

//   return (
//     <div className='d'>{num.user}  , {num.age}
//     <button onClick={increase}>click</button>
//     </div>
    
//   )
// }

// export default App




const App = () => {

  const [num, setnum] = useState({user:'ishand' , age:21})

  function Change(){
    setnum(prev=>({...prev,age:22}))     // changing value of age onClick using arrow func
  }

  return (
    <div>{num.user},{num.age}
    <button onClick={Change}>click</button>
    </div>
    
  )
}

export default App