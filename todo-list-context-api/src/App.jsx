import { useEffect, useState } from 'react'
import './App.css'
import { TodoContextProvider } from './contexts/TodoContext'
import { TodoForm, TodoItem } from './components'

function App() {
	const [todos, setTodos] = useState([])

	const addTodo = (newTodo) => {
		setTodos((prevTodos) => [{id: Date.now(), ...newTodo}, ...prevTodos])
	}

	const updateTodo = (id, newTodo) => {
		setTodos((prevTodos) => prevTodos.map((todo) => todo.id === id ? newTodo : todo))
	}

	const deleteTodo = (id) => {
		setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
	}

	const toggleComplete = (id) => {
		setTodos((prevTodos) => prevTodos.map((todo) => todo.id === id ? {...todo, completed: !completed} : todo))
	}

	useEffect(() => {
		const previousTodos = localStorage.getItem('todos')
		if (previousTodos && previousTodos.length > 0){
			setTodos(JSON.parse(previousTodos))
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])
	
	
	return (
		<TodoContextProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
			<div className="bg-[#172842] min-h-screen py-8">
				<div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
					<h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
					<div className="mb-4">
						<TodoForm />
					</div>
					<div className="flex flex-wrap gap-y-3">
						{todos.map((todo) => (
							<div key={todo.id} className='w-full'>
								<TodoItem todo={todo} />
							</div>
						))}
					</div>
				</div>
			</div>
		</TodoContextProvider>
	)
}

export default App
