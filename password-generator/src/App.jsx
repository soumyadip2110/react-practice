import { useState, useEffect, useRef, useCallback } from "react"

function App() {
	const [password, setPassword] = useState('')
	const [length, setLength] = useState(8)
	const [numAllowed, setNumAllowed] = useState(false)
	const [charAllowed, setCharAllowed] = useState(false)
	const passwordReference = useRef('')

	const passwordGenerator = useCallback(() => {
		let pass = ''
		let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
		str += numAllowed ? '0123456789' : ''
		str += charAllowed ? '!@#$%^&*-_+=[]{}~`' : ''

		for (let i = 0; i < length; i++) {
			let charIndex = Math.floor(Math.random() * str.length)
			pass += str[charIndex]
		}
		setPassword(pass)
	}, [length, numAllowed, charAllowed, setPassword])

	useEffect(() => {
		passwordGenerator()
	}, [length, numAllowed, charAllowed, passwordGenerator])

	function copyPassword() {
		passwordReference.current?.select()
		passwordReference.current?.setSelectionRange(0, length)
		window.navigator.clipboard.writeText(password)
	}

	return (
		<div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
			<h1 className="text-center text-white my-3">Password generator</h1>
			<div className="flex shadow rounded-lg overflow-hidden mb-4">
				<input
					type="text"
					value={password}
					className="outline-none w-full py-1 px-3"
					placeholder="password"
					readOnly
					ref={passwordReference}
				/>
				<button
					className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
					onClick={copyPassword}
				>Copy</button>
			</div>

			<div className='flex text-sm gap-x-2'>
				<div className='flex items-center gap-x-1'>
					<input
						type="range"
						value={length}
						onChange={(e) => setLength(e.target.value)}
						min={6}
						max={100}
						className='cursor-pointer'
					/>
					<label>Length: {length}</label>
				</div>

				<div className="flex items-center gap-x-1">
					<input
						type="checkbox"
						id="numberInput"
						className='cursor-pointer'
						defaultChecked={numAllowed}
						onChange={() => {
							setNumAllowed(prev => !prev)
						}}
					/>
					<label htmlFor="numberInput">Numbers</label>
				</div>

				<div className="flex items-center gap-x-1">
					<input
						type="checkbox"
						id="characterInput"
						className='cursor-pointer'
						defaultChecked={charAllowed}
						onChange={() => {
							setCharAllowed(prev => !prev)
						}}
					/>
					<label htmlFor="characterInput">Characters</label>
				</div>
			</div>
		</div>
	)
}

export default App
