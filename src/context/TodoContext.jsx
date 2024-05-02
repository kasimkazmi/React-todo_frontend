import { createContext, useContext } from "react";

export const TodoContext = createContext({


    addTodo:()=>{},
    deleteTodo:()=>{},
    updatetodo:()=>{},

    toggleTodo:()=>{},

})

export const TodoPrvoider = TodoContext.Provider;

export function useTodo () {
    return useContext(TodoContext)
    
}