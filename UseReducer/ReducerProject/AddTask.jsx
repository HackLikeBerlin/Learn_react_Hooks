import { useState } from "react"

const AddTask = ({onAddTask}) => {
 const [state,setState]=useState('')


 const  handleSubmit = (e)=>{
    e.preventDefault()
    onAddTask(state)
    
    

}
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" required  onChange={(e)=>setState(e.target.value)}  placeholder="Add New Task..."/>
            <button type="submit">Add Task</button>
        </form>
        
    </div>
  )
}

export default AddTask