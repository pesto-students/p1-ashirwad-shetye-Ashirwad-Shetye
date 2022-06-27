import React, { useRef } from 'react'


interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;

}

const TaskInput = ({ todo, setTodo, handleAdd }: Props) => {

    const inputRef = useRef<HTMLTextAreaElement>(null);
    
    return (
        <div className='flex flex-col items-center'>
            <div className='mx-4 py-12 bottom-2 
                            font-Nanum text-slate-700 text-center text-6xl'>
                <h2>Create task</h2>
            </div>
            <div className='container shadow-lg bg-slate-100 border border-none rounded-xl'>
                <form className='p-5 flex flex-col space-y-4 items-center' onSubmit={(e)=>{
                        handleAdd(e)
                        inputRef.current?.blur();
                    }}>
                    <div className=' container p-2 px-4'>
                        <textarea 
                        ref={inputRef}
                        value={todo}
                        onChange={
                            (e)=>setTodo(e.target.value)
                        }
                        
                        placeholder="Enter new task here..." maxLength={180} required
                        className='w-full shadow-inner text-2xl text-slate-700 rounded-2xl text-center
                        resize-none text-clip'/>
                    </div>
                    <button type='submit' className='text-white bg-blue-400
                    text-2xl font-Lato text-center rounded-full w-36 h-14 drop-shadow-md
                    hover:bg-blue-300'>create</button>
                </form>
            </div>
        </div>    
    )   
}

export default TaskInput