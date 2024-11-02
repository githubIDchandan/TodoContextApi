import { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoForm=()=>{
   
    const [todotext,setTodoText]=useState("");
    const {todoList,add} = useContext(TodoContext);

    const addHandler=(e)=>{
        e.preventDefault()
        add({id:Math.random(),title:todotext,completed:false});
        setTodoText("");
    }

    
    
    return (
        <div>
           <div>
           <form onSubmit={addHandler} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todotext}
                onChange={(e)=>{
                    setTodoText(e.target.value);
                }}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>

     </div>
        {
            todoList.map((item)=>{
                return <TodoItem key={item.id} todo={item}/>
               }) 
        }
    </div>
    );
}

export default TodoForm;