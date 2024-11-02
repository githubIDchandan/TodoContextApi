import {useContext, useEffect, useState } from "react";
import TodoContext from "./TodoContext";


const TodoContextProvider=({children})=>{

    // const [user,setuser]=useState(null)
    // console.log("Hii",useContext(TodoContext.Provider))
    const [todoList,setTodoList]=useState([]);
    console.log(todoList)
    const add=(todo)=>{
        // way to fecth previous state
        // return setTodoList((prev)=>[todo,...prev])
        // console.log({...todo})
         return setTodoList([{...todo},...todoList])
    }
    const updateTodo=(id,todo)=>{
        // setTodoList((prev)=>prev.map((prevTodo)=>(prevTodo.id===id?todo:item)))
      const updatedTodo=  todoList.map((item)=>{
            return item.id===id?todo:item;
        })
        setTodoList(updatedTodo);
    }

    const deleteTodo=(id)=>{

        // setTodoList((prev)=>prev.filter((item)=>(item.id!=id))) 

       const filteredTodo= todoList.filter((item)=>{
        return item.id!=id;
       })
       setTodoList(filteredTodo);
    }
   
    const toogle=(id)=>{
      const list=  todoList.map((item)=>{
            return item.id===id?{...item,completed:!item.completed}:item;
        })
        setTodoList(list)
    }

    // useEffect(()=>{
    //     const todos=JSON.parse(localStorage.getItem("todos"));
    //     if(todos&&todos.length>0){
    //         setTodoList(todos);
    //     }
    //     localStorage.setItem("todos",JSON.stringify(todoList))
    // },[todoList])
   
    useEffect(()=>{
        const todos=JSON.parse(localStorage.getItem("todos"));
        if(todos&&todos.length>0){
            setTodoList(todos);
        }
    },[])

    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todoList))
    },[todoList])
    
   
 
    return(
        <div>
            
          <TodoContext.Provider value={{todoList,add,updateTodo,deleteTodo,toogle}}>
              {children}
              {console.log(children)}
          </TodoContext.Provider>
        
        </div>
    )
}

export default TodoContextProvider;