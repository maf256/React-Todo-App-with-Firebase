import './App.css';
import { useState } from "react";
import {AiOutlinePlus} from 'react-icons/ai';
import Todo from './Todo';

function App() {
  const [todo, setTodo] = useState(['test 1', 'test 2', 'testtesttesttest 3']);
  return (
    <div className="App">
      <div className="container">
        <h1>Todo App</h1>
        <form className="form">
          <input type="text" placeholder="Add Todo" />
          <button type="submit"><AiOutlinePlus size={30}/></button>
        </form>
        <ul className="todo-list">
          {todo.map((item, index) => (
            <Todo key={index} item={item} />
          ))}
        </ul>
      </div>

    </div>
  );
}

export default App;
