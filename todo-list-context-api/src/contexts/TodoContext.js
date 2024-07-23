import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: 'Todo msg',
            completed: false
        }
    ],
    addTodo: (newTodo) => {},
    updateTodo: (id, newTodo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => useContext(TodoContext)

export const TodoContextProvider = TodoContext.Provider
