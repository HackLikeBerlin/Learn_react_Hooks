import { useState } from 'react'
import '../App.css'

const UseState = () => {
    const [count,setCount]=useState(0)
  

const incrementCounter=()=>{
   setCount(count+1)
}
const decrementCounter=()=>{
    setCount(count-1)
}
console.log('render');
return (
    <>
    <h2 style={{color:"white"}}>Count Value : {count} </h2>
    <button type='button' onClick={incrementCounter}>Click To Increment</button>
    <button type='button' onClick={()=>count>0 ? decrementCounter():setCount(count)}>Click To Decrement</button>
    </>
  )
}

export default UseState