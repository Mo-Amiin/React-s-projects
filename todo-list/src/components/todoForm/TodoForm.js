import React from 'react';
import './todoForm.css'
function TodoForm(props) {
  
  return <div className='todo-form secondary-color'>
      <form onSubmit={props.addItem}>
          <input 
          type="text" 
          className='text-color' 
          placeholder='Add task' 
          value={props.items.text || ""} 
          onChange={props.handleChange}/>
          <button type='submit'><i className='fas fa-plus plus-icon'></i></button>
      </form>

  </div>;
}

export default TodoForm;
