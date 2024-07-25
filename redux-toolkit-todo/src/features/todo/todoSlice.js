import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    // todos: [{id: 1, text: 'hello world'}]
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

        editTodo: (state, action) => {
            const todoId = action.payload.id
            const newTodoText = action.payload.newText
            state.todos = state.todos.map(todo => todo.id === todoId ? {...todo, text: newTodoText} : todo)
        }
    }
})

export const {addTodo, removeTodo, editTodo} = todoSlice.actions

export default todoSlice.reducer
