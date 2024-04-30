import { createContext, useContext } from "react";

export const TodoContext = createContext({

    todos:[{id:1,value:"this is my todo", completed:false}],

    addTodo:()=>{},
    deleteTodo:()=>{},
    updatetodo:()=>{},

    toggleTodo:()=>{},

})

export const TodoPrvoider = TodoContext.Provider;

export function useTodo (todos) {
    return useContext(TodoContext)
    
}