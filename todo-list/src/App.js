import {useState} from 'react';
import './App.css';
import TodoForm from './components/todoForm/TodoForm';
import TodoList from './components/todoList/TodoList';


function App() {
 const [todo , setTodo] = useState({items:[{
  
    id:Math.floor(Math.random()*5000),
    text:"Wash clothes",
    isCompleted : true,
   },
   {
    id:Math.floor(Math.random()*5000),
    text:"Wash clothes",
    isCompleted : true,
   
 },
 {
  id:Math.floor(Math.random()*5000),
  text:"Wash clothes",
  isCompleted : false,
 
}, {
  id:Math.floor(Math.random()*5000),
  text:"Wash clothes",
  isCompleted : false,
 
},]})

   const handleChange = (event) =>{
     let newEdit = {...todo};
     newEdit.items.text = event.target.value;
     setTodo(newEdit);
   }

   const addItem = (event)=>{
         event.preventDefault();
         let textInput = todo.items.text;
         let newItem = {
           id:Math.floor(Math.random()*5000),
           text:textInput,
           isCompleted:false,
         }
         if(newItem.text !==""){
             const newItems = [...todo.items , newItem]
             setTodo({
               items:newItems,
            })

         }else{
           if(newItem.text=='')
                  throw "no value"
         }
   }

  const completedtodo =  (id) =>{
    const completedtodo = todo.items.map((todo =>{
      if(todo.id === id){
          return {...todo ,isCompleted:!todo.isCompleted}
      }else{
        return todo
      }
    }
    ))
    setTodo({
      items:completedtodo
    })
  }

  const deleteItem = (id)=>{
    const deletedTodo = todo.items.filter((item =>{
      return item.id !==id;
    }))
     setTodo({
       items:deletedTodo

     })
  }

  return (
    <div className="App">
       <TodoForm
       items={todo.items} 
        handleChange ={handleChange}
        addItem = {addItem}
       />
       <TodoList 
        items={todo.items} 
        completedtodo = {completedtodo}
        deleteItem={deleteItem}
        />
    </div>
  );
}

export default App;
