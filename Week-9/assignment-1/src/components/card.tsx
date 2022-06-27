import React, { useEffect, useRef, useState } from 'react';
import { ToDo } from './model';
// import { FiEdit } from 'react-icons/fi'
import { MdDelete, MdOutlineDone } from 'react-icons/md'

interface Props{
    todo: ToDo,
    todos: ToDo[],
    setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>
}

const Card = ({ todo, todos, setTodos}: Props) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    const handleDone = (id: number) => {
        setTodos(todos.map((todo)=>
        todo.id ===id?{...todo,isDone:!todo.isDone}:todo))
    };

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo)=>todo.id !== id))
    };

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();

        setTodos(todos.map((todo)=>
        todo.id === id?{...todo,isDone:!todo.isDone}:todo));

        setEdit(false);
    };  
    
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    },[edit]);

    return(
        <div>
            <form onSubmit={(e) => handleEdit(e,todo.id)}
            className="relative block break-words box-content p-2 
            rounded-lg pb-10 border-none shadow-md
            hover:bg-white dark:bg-slate-100 dark:hover:bg-blue-100"
            >

                {
                    edit ? (
                        <input
                        className='m-2 p-2 w-auto text-center justify-center break-words text-xl border-none rounded-lg'
                        value={editTodo} onChange={(e) => setEditTodo(e.target.value)}/>
                    ):todo.isDone ? (
                        <h3 className="container p-2 opacity-50 text-xl"><s>{todo.todo}</s></h3>
                    ):(
                        <h3 className="p-2 text-xl">{todo.todo}</h3>
                    )}
                
                <div className="py-2 absolute bottom-5 container text-xl 
                text-slate-700 flex">
                    {/* <div className=" absolute left-2">
                        <span onClick={() => {
                            if(!edit && !todo.isDone) {
                                setEdit(!edit);
                            }
                            }}>
                            <FiEdit/>
                        </span>
                    </div> */}
                    
                    <div className="absolute right-4 text-xl justify-end flex space-x-8">
                        <span onClick={() => handleDelete(todo.id)}>
                            <MdDelete/>
                        </span>
                        <span onClick={() => handleDone(todo.id)}>
                            <MdOutlineDone/>
                        </span>
                    </div>
            </div>
            </form>
        </div>
        
    )
}

export default Card;