import React, { useEffect, useState } from 'react'

function useCurrencyInfo(currency) {
	const [data, setData] = useState({})
	const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`
	useEffect(() => {
		fetch(url)
			.then(res => res.json())
			.then(res => setData(res[currency]))
			.catch(err => console.log('Could not fetch: ', err))
	}, [currency])
	return data
}

export default useCurrencyInfo