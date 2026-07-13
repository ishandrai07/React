import React from 'react'

const App = () => {


  // localStorage.setItem("user" , "Ishand")
  // localStorage.setItem("age", "21")
  // localStorage.clear()

  // const user = localStorage.getItem("user")
  // console.log(user);

  // localStorage.removeItem("age")

  // localStorage.clear()



  const user = {
    name:"Ishand",
    age:22
  }

  localStorage.setItem("user",JSON.stringify(user))

  const str = localStorage.getItem("user")
  console.log(typeof(str));    // string type

  const userobj = JSON.parse(localStorage.getItem("user"))
  console.log(userobj);
  
  
  
  
  
//   const prs = JSON.parse(localStorage.getItem("user")
// )

  
  
  
  return (
    <div>App</div>
  )
}

export default App