import { useCallback, useState } from "react"
import Child from "./Child"
import './../../App.css'

const UseCallback = () => {
    console.log('parent');
    const [num,setNum]=useState(5)
    const [toggle,setToggle]=useState(false)

const mulNumby2=useCallback(()=>{
    return num*2
},[num])
 
return (
    <div>
       <h2>Toggle Value:{toggle.toString()}</h2>
       <button onClick={()=>setToggle(!toggle)}>Toggle</button>
       <Child mulNumby2={mulNumby2}/>
       <button onClick={()=>setNum(10)}>SetNumber</button>
    </div>
  )
}

export default UseCallback