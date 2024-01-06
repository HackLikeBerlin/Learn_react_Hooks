import { useReducer } from 'react'
import './../../App.css'

const reducer=(state,action)=>{
        // return {value:state.count+1}
        switch(action.type){
            case 'INCREMENT':
                return {count:state.count+1}
              
            case 'DECREMENT':
                return {count:state.count-1}

            case 'RESET':
                return {count:0}

            default:
                throw new Error('Invalid Action Type')
        }

        

}
const UseReducer = () => {

const [state,dispatch]=useReducer(reducer,{count:0})


const increment=()=>{
    dispatch({type:'INCREMENT'})
}
const Decrement=()=>{
    dispatch({type:'DECREMENT'})
}
const Reset=()=>{
    dispatch({type:'RESET'})
}

return (
    <>
    <p style={{color:'white'}}>Count : {state.count}</p>
    <button onClick={increment}>Increment</button>
    <button onClick={Decrement}>Decrement</button>
    <button onClick={Reset}>Reset</button>
    </>
  )
}

export default UseReducer