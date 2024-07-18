import { useState } from "react"

function App() {
	let [color, setColor] = useState('lightgray')
	
	return (
		<div className="h-screen w-screen" style={{backgroundColor: color}}>
			<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
				<div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl text-white">
					<button
						onClick={() => setColor('red')}
						className="outline-none px-4 py-1 bg-red-600 rounded-full shadow-lg">Red
					</button>
					<button
						onClick={() => setColor('green')}
						className="outline-none px-4 py-1 bg-green-600 rounded-full shadow-lg">Green
					</button>
					<button
						onClick={() => setColor('blue')}
						className="outline-none px-4 py-1 bg-blue-600 rounded-full shadow-lg">Blue
					</button>
					<button
						onClick={() => setColor('pink')}
						className="outline-none px-4 py-1 bg-pink-400 text-black rounded-full shadow-lg">Pink
					</button>
					<button
						onClick={() => setColor('yellow')}
						className="outline-none px-4 py-1 bg-yellow-300 text-black rounded-full shadow-lg">Yellow
					</button>
					<button
						onClick={() => setColor('purple')}
						className="outline-none px-4 py-1 bg-purple-600 rounded-full shadow-lg">Purple
					</button>
					<button
						onClick={() => setColor('orange')}
						className="outline-none px-4 py-1 bg-orange-500 rounded-full shadow-lg">Orange
					</button>
					<button
						onClick={() => setColor('gray')}
						className="outline-none px-4 py-1 bg-gray-500 rounded-full shadow-lg">Gray
					</button>
					<button
						onClick={() => setColor('white')}
						className="outline-none px-4 py-1 bg-white text-black rounded-full shadow-lg">White
					</button>
					<button
						onClick={() => setColor('black')}
						className="outline-none px-4 py-1 bg-black rounded-full shadow-lg">Black
					</button>
				</div>
			</div>
		</div>
	)
}

export default App
