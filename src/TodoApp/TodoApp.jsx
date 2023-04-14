import React, { useState } from 'react'
// import {Data} from "./Data";
const TodoApp = () => {


  const [todo, setTodo] = useState("");
  const [todos, setTodos]= useState([
    {
        id:1,
        fullName:"Kamran Ali"
    },
    {
        id:2,
        fullName:"Ali Hamza"
    },
    {
        id:3,
        fullName:"Hussian"
    },
]);

const addTodo = () => {
  setTodos([...todos,todo]);
  setTodo('');
}

const deleteTodo = (id) => {
const newTodos = todos.find((todo) =>  todo.id !== id)
setTodos(newTodos);
}
const id = todos.length-1;
  return (
    <div>
        <input type="text" 
        value={todo}
         onChange={(e)=>(setTodo(e.target.value))}/>
        <button onClick={addTodo}>Add</button>
      <ul>
      {todos.map((todo, index) => (
        <div>
        <li>{todo}</li>
        <button onClick={deleteTodo(id)}>Delete</button>
        </div>
      ))}
    </ul>
    </div>
  )
}

export default TodoApp;