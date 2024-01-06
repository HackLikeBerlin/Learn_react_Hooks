import { useState,useEffect } from "react"

const Child = ({mulNumby2}) => {
    console.log('child');
    const [value,setValue]=useState(0)
    
    useEffect(()=>{
        console.log('updated');
        setValue(mulNumby2())
},[mulNumby2])

return (
    <div>
        <h2>num value : {value}</h2>
       
        
    </div>
  )
}

export default Child