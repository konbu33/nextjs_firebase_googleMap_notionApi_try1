// import { useState, useEffect } from 'react'
import { Client } from '@notionhq/client'


function notionapi({data}) {


	// useEffect( () => {
	// 	async function addItem(text) {
	// 		try {
	// 			await notion.request({
	// 				path: "pages",
	// 				method: "post",
	// 				body: {
	// 					parent: { database_id: databaseId },
	// 					properties: {
	// 						title: { 
	// 							title:[
	// 								{
	// 									"text": {
	// 										"content": text
	// 									}
	// 								}
	// 							]
	// 						}
	// 					}
	// 				},
	// 			})
	// 			console.log("Success! Entry added.")
	// 		} catch (error) {
	// 			console.error(error.body)
	// 		}
	// 	}
		
	// 	addItem("Yurts in Big Sur, California")
	// },[])

	console.log('data: ', data)

	return (
		<>
			<div>notionapi</div>
		</>
	)
}

export async function getServerSideProps() {

	const notion = new Client({ auth: process.env.NOTION_FIRST_INTEGRATION })
	const databaseId = process.env.NOTION_API_TEST_DBID
	console.log('notion client: ', notion)
	console.log('databaseId: ', databaseId)

	async function addItem(text) {
		// try {
			const res = notion.request({
				path: "pages",
				method: "post",
				body: {
					parent: { database_id: databaseId },
					properties: {
						title: { 
							title:[
								{
									"text": {
										"content": text
									}
								}
							]
						}
					}
				},
			})
			// .then( () => {
				// return null
				// return { result: "Success! Entry added."}
			// })
			// .catch( (error) => {
				// return null
				// return { result: "error "}
			// }j
			
		console.log('res: ', res)
		return res
		// 	console.log("Success! Entry added.")
			// return { result: "Success! Entry added."}
		// } catch (error) {
		// 	console.error(error.body)
		// 	return { result: "error "}
		// }
	}
	
	const data = await addItem("Yurts in Big Sur, California")
		.then( (data) => {
			console.log('success!!! data: ', data)
			return { result: data }
		})
		.catch( error => {
			console.log('error: ', error)
			return { result: error }
		})
	console.log('data: ', data)

	// const url = "https://api.github.com/users/evancz"
	// const res = await fetch(url)
	// const data = await res.json()
	// return { props: { data } }
	return { props: { data } }

}


// export async function getServerSideProps() {
// 	const url = "https://api.github.com/users/evancz"
// 	const res = await fetch(url)
// 	const data = await res.json()
// 	return { props: { data } }
// }

export default notionapi