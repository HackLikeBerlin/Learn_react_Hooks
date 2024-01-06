import { useState } from "react"
import userContext from "./UserContext"

const UserInfo = ({children}) => {
const [UserDetails,setUser]=useState({userName:'Adarsh Rai',email:'adarshrai@gmail.com',age:20})

// const UserDetails={
//         userName:'Adarsh Rai',
//         email:'adarshrai@gmail.com',
//         age:20
//     }

const changeUser=()=>{
    setUser({userName:'Vivek Rai',email:'Vivekrai@gmail.com',age:22})
}

  return (
    // <userContext.Provider value={UserDetails}>
    <userContext.Provider value={{UserDetails,changeUser}}>
            {children}
    </userContext.Provider>
  
  )
}

export default UserInfo