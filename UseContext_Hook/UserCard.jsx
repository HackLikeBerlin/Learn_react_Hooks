import { useContext } from "react"
import userContext from "./Context/UserContext"

const UserCard = () => {
 const user=useContext(userContext)
console.log(user );

 
  return (
    <div  style={{ height:'300px',width:'400px',border:'1px solid white',position:'absolute',bottom:0,left:"50px",backgroundColor:'green'}}>
        <h2>User Card</h2>
        <div style={{textAlign:'left', position:'absolute',left:'100px'}}>
            
            <h4 style={{color:'white'}}>UserName : {user.UserDetails.userName}</h4>
            <h4 style={{color:'white'}}>Email : {user.UserDetails.email}</h4>
            <h4 style={{color:'white'}}>Age : {user.UserDetails.age}</h4>
            <button onClick={user.changeUser}>Click To Change</button>
        </div>

      
        
    </div>


  )
}

export default UserCard