
import './App.css';
 import Form from './Components/Form';
import "./index.css"
import Todos from './Components/Todos';
import { useState } from 'react';

function App() {

  const [todos, setTodos]= useState([])

const deleteTodo=(id)=>{
  setTodos(todos.filter((d)=>
    d.id !== id
  ))
}

const [id, setId]=useState("")

console.log("this is id", id)
  return (
    <div className="App">
     <h1 className="text-center"> React To Do List  </h1>
     <Form  todos={todos} setTodos={setTodos} id={id} setId={ setId}/>
     <Todos todos={todos} deleteTodo={deleteTodo} setId={setId}/>
    </div>
  );
}

export default App;
