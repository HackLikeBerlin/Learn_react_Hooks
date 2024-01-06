import './../../../App.css'
import { useRef, useState , useMemo } from "react"

const cakeList=[

    {id:1,name:'Chocolate Cake',type:'chocolate'},
    {id:2,name:'Red Velvet Cake',type:'red-velvet'},
    {id:3,name:'Vanilla Cake',type:'Vanilla'},
    {id:4,name:'Strawberry Cake',type:'Strawberry'},
    {id:5,name:'Chocolate Cheesecake',type:'chocolate'},
]
const Real_Life_UseMemo = () => {
    const [cakes,setCakes]=useState(cakeList)
    const inputVal=useRef(null)
    const [counter,setCounter]=useState(0)

    const addCake=()=>{
        const newCake={id:cakes.length+1,name:`cake ${inputVal.current.value}`,type:'chocolate'}
        setCakes([...cakes,newCake])
    }

const filteredCake=useMemo(()=>{
    console.log('run');
    return cakes.filter((cake)=>{
            return cake.type==='chocolate'
    })
},[cakes])

return (
    <>
    <h1 style={{color:"white"}}>{counter}</h1>
    <h1 style={{color:"white"}}>List Of Chocolate Cake</h1>
    <div>
        {filteredCake.map((ourCakes)=>{
           const {id,name}=ourCakes
            return (
                <>
                <ul>
                    <li key={id}>{name}</li>
                </ul>
                </>
            )
        })}
</div> <br />
    <h3>Total Chocolate cake:{filteredCake.length}</h3>
    <br />
    <button onClick={()=>setCounter(counter+1)}>Increment Counter</button> 
    <br /> <br />
    <input type="text" required autoComplete='off' ref={inputVal}  style={{width:'170px',height:'25px',marginRight:'20px'}}/>

    <button onClick={addCake}>Add Cake</button>
    </>
  )
}

export default Real_Life_UseMemo