import React from 'react';
import './todoList.css'
function TodoList(props) {
  const items = props.items

  const taskStatus = items.map((item) =>{
    return item.isCompleted;
  })

  const notCompletedTask = taskStatus.filter(item =>{
        return item !==true;
  })

  const completedTask = taskStatus.filter(item =>{
    return item ===true
  })
  
  return (
  
  <div className='task-card'>
   
   {items.map((item) =>(
   <div className={item.isCompleted ? "task-done" : 'task-header secondary-color' }>
     <div className='task-title'>
       <input
        type="text"
         className='text-color'
          value={item.text}
          style={{textDecoration:item.isCompleted ? "line-through":""}}
        />
       <i className='fas fa-trash task-icon'
        onClick={()=>{props.deleteItem(item.id)}}></i>
       <i className='fas fa-check-circle task-icon'
       onClick={()=>{props.completedtodo(item.id)}}></i>
     </div>
    
     </div>
      ))}
     <div className='allTask secondary-color-text'>
       <div className='tsk-msg'>{notCompletedTask.length} tesk left</div>
       <div className='tsk-msg'>{completedTask.length} task completed</div>
     </div>
    
  </div>)
}

export default TodoList;
