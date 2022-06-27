import React from 'react'
import Card from './card';
import { ToDo } from './model'


interface Props{
  todos: ToDo[];
  setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const Taskcards = ({ todos, setTodos}: Props) => {
  return (
    <div className="grid justify-center align-center">
        <div className="container w-fit grid grid-cols-3 grid-rows-1 gap-16 m-7 mt-20 
        md:grid-cols-3 md:grid-flow-row">
          {todos.map((todo) => (
            <Card 
            todo={todo} 
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
            />
          ))}
        </div>
    </div>
  )
}

export default Taskcards