import React, { useState } from 'react';
import './App.css';
import './components/header';
import Header from './components/header';
import TaskInput from './components/taskInput';
import Taskcards from './components/taskcards';
import { ToDo } from './components/model';


const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<ToDo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, {id: Date.now(), todo, isDone: false}]);
      setTodo("");
    }
  };

  console.log(todos);

  return (
    <div>
      <Header/>
      <TaskInput todo={todo} setTodo={setTodo} handleAdd={ handleAdd }/>
      <Taskcards todos={todos} setTodos={setTodos} />
      
    </div>
  );
}

export default App;
