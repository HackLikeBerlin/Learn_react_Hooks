// import { useContext } from "react";
//  import userContext from "./Context/UserContext"
import UserCard from "./UserCard"

const DashBoard = () => {
 return (
    <div style={{backgroundColor:"blue", height:'400px',width:'500px',position:'absolute',bottom:0,left:"50px"}}>
        <h1 style={{fontSize:'40px'}}>DashBoard</h1>
        <UserCard />
    </div>
  )
}

export default DashBoard