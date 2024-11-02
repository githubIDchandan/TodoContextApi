import { createContext } from "react";


const  TodoContext=createContext({
    todoList:[{
        id:1,
        title:"learnDsa",
        completed:false
    }],
    add:(todoList)=>{},
    deleteTodo:(id)=>{},
    updateTodo:(id,todoList)=>{},
    toogle:(id)=>{}
});

// console.log(TodoContext)


export default TodoContext;