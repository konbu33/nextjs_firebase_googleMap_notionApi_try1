import { useState, useEffect } from "react"

export default function notioncors() {

	const [ notionData, setNotionData ] = useState(null)
	
	useEffect( () => {

		async function getData() {
			const res = await fetch('http://localhost:3000/api/notioncors')
			const data = await res.json()
			console.log('notion cors tsx res: ', data)
			setNotionData(data)
		}
		getData()

	},[])

	return (
		<>
			<pre>{ notionData &&  JSON.stringify(notionData, null, 2) }</pre>
		</>
	)
}