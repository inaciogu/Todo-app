import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

interface ITodo {
  name: string;
  status: string;
}

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const getTodos = async () => {
      const response = await fetch('http://localhost:3001/todo');
      const json = await response.json();
      setTodos(json);
    }
    getTodos();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo list</h1>
      </header>
      <main>
        <div>
          <ul>
            {todos.map((todoItem) => (
              <li>
                <span>
                  {todoItem.name}
                  {todoItem.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
