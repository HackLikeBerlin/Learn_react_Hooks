import UserInfo from "./Context/UserInfo"
import DashBoard from "./DashBoard"
import './../../App.css'
const UserDashBoard = () => {

  return (
    <div style={{ height:'500px',width:'600px',border:'1px solid white',position:'relative',backgroundColor:'red'}}>
        <h1  style={{color:'white'}}>UserDashBoard</h1>
       <UserInfo>
            <DashBoard/>
       </UserInfo>
        
    </div>
  )
}

export default UserDashBoard