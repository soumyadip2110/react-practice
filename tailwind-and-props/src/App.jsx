import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
	const [count, setCount] = useState(0)
	let myArr = [1, 2, 3]
	let myObj = {
		name: 'Soumyadip',
		age: 21
	}
	return (
		<>
			<h1 className='bg-violet-600 text-white p-4 rounded-xl mb-4'>Tailwind test</h1>
			<div className='flex'>
				<Card username='Soumyadip' btnText='Click me' />
				<Card username='chaiaurcode' />
			</div>
		</>
	)
}

export default App
