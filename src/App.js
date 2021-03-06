import React, { useState } from "react"
import './App.css';
// importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  return (
    <div className="App">
      <header>
  <h1>Daniels todo list</h1>
        </header>
        <Form 
        inputText={inputText}
        todos={todos} 
        setTodos={setTodos}
         setInputText={setInputText}/>
         setStatus={setStatus}
        <TodoList setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
