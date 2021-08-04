import { useState, useEffect } from "react";
import { Form, Field } from "react-final-form"
import firebase from "../firebase";
import myInput from './component/appInput'
import notionInput from './component/notionInput'

const db = firebase.firestore()

function appInput(name) {
	return (
		<>
			<div className="bg-yellow-100">
				<label>{name}:</label>
				<Field
					name={name}
					component="input"
					className="focus:outline-none"
				>
				</Field>
			</div>
		</>
	)
}


function appForm() {

	function addIncident(e) {

		const incidentData = {
			title: e.title,
			createdAt: firebase.firestore.FieldValue.serverTimestamp() 
		}

		// db.collection("process").doc("incident").set(incidentData)
		// 	.then( () => {
		// 		console.log('Document write success: ')
		// 	})
		// 	.catch( error => {
		// 		console.log('Error adding document: ', error)
		// 	})

		db.collection("incident").add(incidentData)
			.then( docRef => {
				console.log('Document write with ID: ', docRef.id)
			})
			.catch( error => {
				console.log('Error adding document: ', error)
			})
	}

	return (
		<>
			<div className="bg-green-100">
				<Form
					onSubmit={addIncident}
					render={ ({handleSubmit}) => {
						return (
							<>
								<form onSubmit={handleSubmit}>
									{ appInput("title")}
									<button>addIncident</button>
								</form>
							</>
						)
					}}
				>

				1</Form>
			</div>
		</>
	)
}


export default function process(processName) {

	const [ incidentList, setIncidentList ] = useState([])
	const [ incidentDelList, setIncidentDelList ] = useState([])

	useEffect( () => {
		const incidentDataList = []

		// const incidentData = async () => {
		// 	await db.collection("incident").get()
		// 		.then( (querySnapshot) => {
		// 			querySnapshot.forEach( (doc) => {
		// 				incidentDataList.push({ id: doc.id, data: doc.data()})
		// 			})
		// 			setIncidentList(incidentDataList)
		// 		})
		// 		.catch(error => {
		// 			console.log('error document get: ', error)
		// 		})
		// }
		// incidentData()

		const unsubscribe = () => {
			db.collection("incident")
				.onSnapshot( (querySnapshot) => {
					querySnapshot.docs.forEach( doc => {
						incidentDataList.push( {id: doc.id, data: doc.data() })
					})
					setIncidentList(incidentDataList)
				}, (error) => {
					console.log('error onSnapshot: ', error)
				})
		}
		// incidentData()

		// const onSnapShotData = () => {
		// 	db.collection("process").doc("incident")
		// 		.onSnapshot( (doc) => {
		// 			var source = doc.metadata.hasPendingWrites ? "local" : "server"
		// 			console.log(source, 'data: ', doc.data())
		// 			incidentDataList.push(doc.data())
		// 			setIncidentList(incidentDataList)
		// 		})
		// }
		// onSnapShotData()

		return unsubscribe()
	}, [])

	function changeDelList(e) {
		console.log('checked e: ', e.target.checked, "value: ", e.target.value)

		const isChecked = e.target.checked
		let newDelList  = incidentDelList

		if (isChecked) {
			newDelList.push(e.target.value)
		} else {
			newDelList = incidentDelList.filter( i => i !== e.target.value )
		}
		setIncidentDelList(newDelList)
	}

	console.log('IncidentDelList: ', incidentDelList)

	function delIncident() {
		console.log('delIncident: ')

		incidentDelList.map( docId => {
			db.collection("incident").doc(docId).delete()
				.then( () => {
					console.log('delete success: ')
				})
				.catch( error => {
					console.log('delete error: ', error)
				})
		})
		setIncidentDelList([])
	}

	return (
		 <>
		 	<div className="container bg-gray-100 ">
				{ appForm() }

				<Form
					onSubmit={delIncident}
					render={ ({handleSubmit} ) => {
						return (
							<form onSubmit={handleSubmit}>
							
							{ myInput("id") }
							{
								incidentList && incidentList.map( (data) => {
									return (
										<div key={data.id} className="flex items-center space-x-4">
											<Field 
												name={data.id}
												component="input"
												type="checkbox"
												value={data.id}
												onClick={changeDelList}
											/>
											<div>id: {data.id}, title: {data.data.title}</div>
										</div>
									)
								})
							}
							<button>delete</button>
							{ notionInput("id") }
							</form>
						)
					}}
				>
				</Form>
			</div>
		 </>
	 )
}
