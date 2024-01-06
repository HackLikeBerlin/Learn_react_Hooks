import { useReducer } from 'react'
import './../../../App.css'
import AddTask from './AddTask';
import TaskList from './TaskList';

let nextId=3;
const initialTask=[
    {id:0,text:'Learn React',Done:false},
    {id:1,text:'Learn CSS',Done:false},
    {id:2,text:'Learn HTML',Done:false}
]

const taskReducer=(task,action)=>{
    switch(action.type){
        case 'added':
            return [...task,{id:action.id,text:action.text,done:false
            }]
        

        case 'deleted':
            return task.filter((task)=>task.id!==action.id)

        case 'changed':
            return task.map((t)=>{
                if(t.id===action.task.id){
                    return action.task
                }
                else{
                    return t
                }
            })
        
    }

  
    
}
const UseReducerProject = () => {
    const [task,dispatch]=useReducer(taskReducer,initialTask)
    
 
    
    
const handleAddTask=(text)=>{
        dispatch({
                type:'added',
                id:nextId++,
                text:text
            })
        
            
    }

    const handleDeleteTask=(taskId)=>{
        dispatch({
            type:'deleted',
            id:taskId,
           
        })
}

const handeleChangeTask=(task)=>{
    console.log(task);
    
    dispatch({
        type:'changed',
        task:task
    })
}
  return (
    <div>
        <h1>Welcome</h1>
        <AddTask onAddTask={handleAddTask}/>
       <TaskList task={task} handleDeleteTask={handleDeleteTask} onChangeTask={handeleChangeTask}/>
    </div>
  )
}

export default UseReducerProject