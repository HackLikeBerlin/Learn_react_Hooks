import {  useMemo, useState } from 'react'
import './../../App.css'

const UseMemo = () => {
  const [count, setCount]=useState(0)
  const [number ,setNumber]=useState(0)


const expensiveFunction=(count)=>{
  console.log(count);
  
  for(let i=0;i<10000;i++) 
    console.log('hey');
      return count
  
    }

const data=useMemo(()=>{
  return expensiveFunction(count)
},[count])


return (
    <>
    <h2>{data}</h2>
    <br /><br />
    <button onClick={()=>setCount(count+1)}>Increment Count</button>
    <br />
    <h2>{number}</h2>
    <button onClick={()=>setNumber(number+1)}>Increment Count</button>

    </>
   )

}
export default UseMemo