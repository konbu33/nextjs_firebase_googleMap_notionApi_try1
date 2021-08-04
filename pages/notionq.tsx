import { useState } from 'react'
import { Client } from '@notionhq/client'

const notion = new Client({auth: process.env.NOTION_API_KEY})

export async function getServerSideProps() {

	function getDBRetrieve() {
		const res = notion.databases.retrieve({
			database_id: process.env.NOTION_DATABASE_ID 
		})
		console.log('res: ', res)
		return res 
	}
	const dbRet = await getDBRetrieve()

	return { 
		props: {
			dbRet,
		}
	}
}

export default function notionq({dbRet}) {

	const initQuery = `{
  query: {
    title: "all"
  }
}`

	const [ inputDbValue, setInputDbValue] = useState("")
	const [ dbIdList, setDbIdList ] = useState([process.env.NOTION_DATABASE_ID])
	const [ targetDbId, setTargetDbId ] = useState("")
	const [ query, setQuery ] = useState(initQuery)

	function handleOnChange(e) {
		setInputDbValue(e.target.value)
	}

	function handleSubmit(e) {
		e.preventDefault()
		console.log('e: ', e)
		setDbIdList([...dbIdList, e.target[0].value])
		setInputDbValue("")
	}

	function handleSelect(e) {
		console.log('handle select e: ', e.target.value)
		setTargetDbId(e.target.value)
	}

	function createQuery(e) {
		e.preventDefault()
		setQuery(e.target.value)
	}

	function handleQuery(e) {
		e.preventDefault()

	}

	console.log('dbIdList: ', dbIdList)
	console.log('inputDbValue: ', inputDbValue)
	console.log('targetDbId: ', targetDbId)

	return (
		<>
			<div className="w-full">
				<div className="border-2">
					<form onSubmit={handleSubmit}>
						<label>database id: 
							<input placeholder="database id" onChange={handleOnChange} value={inputDbValue} />
						</label>
						<button>add database id</button>
					</form>
				</div>

				<div className="border-2">
					<form onSubmit={() =>{}}>
						{
							dbIdList.length
							? <label>database id: 
							 		<select onChange={handleSelect}> 
										{
											dbIdList.map((dbid,index) => {
												return (
													<option key={index} value={dbid}>{dbid}</option>
												)
											})
										}
									</select>
								</label>
							: <div>No database Id</div>
						}
					</form>
				</div>

				<div className="border-2">
					<form onSubmit={handleQuery}>
						<label>notion query: 
							<textarea className="w-full h-80" onChange={createQuery} value={query}></textarea>
						</label>
						<button>query</button>
						<pre>
							{ dbRet && JSON.stringify(dbRet,null,2) }
						</pre>
					</form>
				</div>
				</div>
		</>
	)
}

