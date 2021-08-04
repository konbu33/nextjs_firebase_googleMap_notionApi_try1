import { useState } from 'react'
import { Field } from 'react-final-form'

export default function appInput(name) {

	const [ isEdit, setIsEdit ] = useState(false)
	const [ value, setValue ] = useState("")
	
	function edit(e) {

		if (isEdit) {
			console.log('edit true  e: ', e)
			setValue(e.target.value)
		} else {
			console.log('edit false e: ', e)
			setValue(e.target.value)
		}
		setIsEdit(!isEdit)
	}

	return (
		<div>
			<label>{name}: </label>
			{ 
				isEdit
				? 
					<input
						name={name}
						onBlur={edit}
						value={value}
						defaultValue={value}
						autoFocus
					/>
				:
					<div
						className=" inline-block"
						onDoubleClick={edit}
					>
					{ value ? value : "Edit" }
					</div>
			}

		</div>
	)
}
