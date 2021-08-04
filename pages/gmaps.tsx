import { useEffect, useState } from 'react'
import { Loader } from '@googlemaps/js-api-loader'
import { Wrapper, Status } from '@googlemaps/react-wrapper'

export default function gmaps() {
	// const [ map, setMap ] = useState({})

	const loadOption = {
		apiKey: process.env.GPC_GOOGLE_MAP_API_KEY,
		version: "weekly",
		// libraries: ["places"],
	}

	console.log('apiKey: ', process.env.GPC_GOOGLE_MAP_API_KEY)
	const loader = new Loader(loadOption)

	function mapOption(google) {
		return {
			// center: { 
			// 	lat: 0, 
			// 	lng: 0, 
			// },
			center: new google.maps.LatLng(-31.947414, 115.835933),
			zoom: 8,
		}
	}

	let map
	useEffect( () => {
		async function getMap() {
			await loader
				.load()
				.then( (google) => {
					new google.maps.Map(document.getElementById("map"),mapOption(google))
					// map = new google.maps.Map(document.getElementById("map"),mapOption(google))
					// console.log('map: ', map)
					// setMap(map)
				})
				.catch( (error) => {
					console.log('error: ', error)
				})
			}
		getMap()

	},[])

	console.log('loader: ', loader)

	const render = (status: Status) => {
		if (status === Status.LOADING) return <div>loding...</div>;
		if (status === Status.FAILURE) return <div>Failure!!!</div>;
		return null;
	};

	// const MyMap = () => {
	// 	return (
	// 		<div id="map" className=" outline-black">a</div>
	// 		<div id="map" style={{position: "relative", overflow: "hidden", display: "block", height: "500px", width: "100%"}}></div>
	// 	)
	// }

	return (
		<>
			<div>mappoint</div>
			<div id="map" className="w-full"></div>
			{/* <Wrapper version="weekly" apiKey={process.env.GPC_GOOGLE_MAP_API_KEY} render={render}> */}
				{/* <MyMap/> */}
			{/* </Wrapper> */}
		</>
	)
}


// index.esm.js?4272:111 Uncaught Error: Loader must not be called again with different options. 
// {"apiKey":"AIzaSyBHhirDOrZQaDCNnb0uurU68reBU-JgLm8","id":"__googleMapsScriptId","libraries":[],"url":"https://maps.googleapis.com/maps/api/js"} 
// !== 
// {"version":"weekly","apiKey":"AIzaSyBHhirDOrZQaDCNnb0uurU68reBU-JgLm8","id":"__googleMapsScriptId","libraries":[],"url":"https://maps.googleapis.com/maps/api/js"}
