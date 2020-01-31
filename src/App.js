import React, { useState } from 'react';
import './App.css';
import TodoItem from './TodoItem.js';

function App() {

  const [ todos,setTodos ] = useState([]);
  const [ todo,setTodo ] = useState('');

  const handleChange = (e) =>{
    setTodo(e.target.value);
    
  }
  const addTodo = ()=>{
    console.log(todo);
    let temp = [...todos ,{todo}];
    setTodos(temp);
    setTodo('');
  }

  return (
    <div className="App">
      <input type='text' defaultValue={todo} onChange={ e => handleChange(e) } />
      <button onClick={ addTodo }>Add Todo</button>
      { 
        todos.map( (index,t) =>{
          return <TodoItem index={index} key={index} name={t}  />
        })
      }
    </div>
  );
}

export default App;
