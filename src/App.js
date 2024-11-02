import React from "react";
import ReacDOM from "react-dom/client"
import TodoContextProvider from "./context/TodoContextProvider";
import TodoForm from "./components/TodoForm";
import { useContext } from "react";
import TodoContext from "./context/TodoContext";
import TodoItem from "./components/TodoItem";
import ShowItem from "./components/ShowItem";




const AppLayout=()=>{
   const {todoList}=useContext(TodoContext);
//    console.log(todoList)
    return(
        <TodoContextProvider>
           <div className="bg-[#090a0b] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        
                    </div>
                </div>
            </div>
            <div>
            </div>
        </TodoContextProvider>
    )
}


const root=ReacDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)