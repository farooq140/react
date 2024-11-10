import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todo:[
        { 
            id:1,
            title:"todo msg",
            completed:false,
        }
    ],
    addTodo:(todo)=>{},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleTodo: (id) => {},
});

export const useTodo = () => {
   return useContext(TodoContext);

}

export const TodoProvider=TodoContext.Provider;