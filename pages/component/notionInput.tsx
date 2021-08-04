import { useState, createRef } from 'react'

export default function notionInput(name) {

	const [ value, setValue ] = useState("")
	const [ isContextMenu, setIsContextMenu ] = useState(false)
	const [ blockList, setBlockList] = useState(["text","image","file"])

	function handleContextMenu(e) {
		console.log('handleContextMenu: ', e)
		if ( e.keyCode === 191 ) {
			setIsContextMenu(true) 

		} else {
			isContextMenu && setIsContextMenu(false)
		}
	}

	function handleOnBlur(e) {
		isContextMenu && setIsContextMenu(false)
	}

	function handleOnClick(e) {
		console.log('handleOnClicke: ', e.target.id)
		isContextMenu && setIsContextMenu(false)
	}

	function createBlock(name) {
		return (
			<>
				<li onClick={handleOnClick} id={name}  className="hover:bg-yellow-100 p-4 rounded-md border-2">{name}</li>
			</>
		)
	}

	return (
		<>
			<div className="">
				<h1>notion input</h1>
				<label>{name}: </label>
				<input 
					name={name}
					className="focus:outline-none" 
					defaultValue={value} 
					autoComplete="off"
					onKeyDown={handleContextMenu}
					onBlur={handleOnBlur} 
				/>
				{
					isContextMenu
					? <ul
							className="mx-5 my-1 border-2 p-4 text-xs bg-white rounded-md space-y-2" 
						>Basic Block
							{
								blockList.map( blockName => {
									return createBlock(blockName)
								})
							}
					  </ul>
					: null
				}
			</div>
		</>
	)
}
