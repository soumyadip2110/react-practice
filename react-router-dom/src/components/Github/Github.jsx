import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
	// const [data, setData] = useState({})

	// useEffect(() => {
	// 	fetch('https://api.github.com/users/hiteshchoudhary')
	// 	.then(response => response.json())
	// 	.then(data => setData(data))
	// }, [])
	
	const data = useLoaderData()
	
	return (
	<div className='flex flex-col items-center text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
		Github followers: {data ? data.followers : 'NA'}
		<img src={data ? data.avatar_url : '#'} alt='Github avatar image' width={300} className='m-4'/>
	</div>
	)
}

export default Github

export const githubInfoLoader = async () => {
	const response = await fetch('https://api.github.com/users/hiteshchoudhary')
	return response.json()
}
