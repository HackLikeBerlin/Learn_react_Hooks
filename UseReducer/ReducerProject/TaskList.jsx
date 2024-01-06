import './TaskList.css'
const TaskList = ({task,handleDeleteTask,onChangeTask}) => {

    return (
    <>
    {task.map((task)=>{
     
      
       return (
            <>
            <ul >
                <li>
                <input type="checkbox"  checked={task.Done}  onChange={()=>onChangeTask({...task,Done:!task.done})}/>
                <span className={task.Done ? "completed" : "not-completed"}>
                {task.text}
                </span>
                
                <button onClick={()=>handleDeleteTask(task.id)}>Delete</button>
                </li>
                
            </ul>
           
            </>
        )
    })}
    </>
  )
}

export default TaskList