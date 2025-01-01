import { useState } from 'react'
import './App.css'

function App() {
   const [todos, setTodos] = useState(["todo1", "todo2", "todo3"]);

  return (
    <ul>
      {todos.map((todo) => (
        <li>{todo}</li>
      ))}
      <button onClick={() => setTodos([...todos, "newTodo"])}>
        {" "}
        add new todo
      </button>
      <button onClick={() => setTodos(todos.slice(0, -1))}>
        Delete todo
      </button>
    </ul>
  );
}

export default App
