import { useState } from 'react';
import './App.css'

function App() {
	let [counter, setCounter] = useState(0);

	function handleAdd(){
		setCounter(counter < 10 ? ++counter : counter)
	}
	
	function handleSubstract(){
		setCounter(counter > 0 ? counter - 1 : counter)
	}

	return (
		<>
			<h1>React with Vite</h1>
			<h2>Counter value: {counter}</h2>
			<button onClick={handleAdd}>Add</button>
			<button onClick={handleSubstract}>Substract</button>
		</>
	)
}

export default App
