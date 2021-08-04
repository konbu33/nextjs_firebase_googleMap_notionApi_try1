import { useState } from 'react'

export default function btn(name) {

	const [ isClicked, setIsClicked ] = useState(false)

	function handleClick() {
		setIsClicked(!isClicked)
	} 

	console.log('isClicked: ', isClicked)
	return (
		<>
			<div className="main_bg h-full w-full ">
				{ isClicked 
					? <button onClick={handleClick} className="shape_bg newmoph_shadow_o_inset m-10 py-2 px-4 rounded-md hover:bg-gray-100 focus:outline-none">{name}</button>
					: <button onClick={handleClick} className="shape_bg newmoph_shadow_o m-10 py-2 px-4 rounded-md hover:bg-gray-100 focus:outline-none">{name}</button>
				}
				{/* <button className="shape_bg newmoph_shadow m-10 py-2 px-4 rounded-md hover:bg-gray-100 focus:outline-none">Button</button> */}
				{/* <button className="shape_bg newmoph_shadow_o1 m-10 py-2 px-4 rounded-md hover:bg-gray-100 focus:outline-none">Button</button> */}
			</div>
		</>
	)
}
