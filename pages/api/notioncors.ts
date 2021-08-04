import { Client } from '@notionhq/client'

export default async function(req, res) {

	const auth = {
		auth: process.env.NOTION_API_KEY
	}                  	
                    	
	const notion = new Client(auth)

	const dbid = {
		database_id: process.env.NOTION_DATABASE_ID
	}

	async function getData() {
		const res = await notion.databases.retrieve(dbid)
		console.log('notion-cors res: ', res)
		return res
	}
	const data = await getData()
	console.log('data: ', data)

	return res.status(200).json(data)

}                   	
                    	
                    	
                    	