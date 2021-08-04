import { Form, Field } from 'react-final-form'
import firebase from '../firebase'

export default function signup() {

	function mySignup(e) {
		const { email, password } = e
		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then( (user) => {
				console.log('Created User Success: ', user)
			})
			.catch( (error) => {
				console.log('Create User Error', error)
			})
	}

	function myInput(name) {
		return (
			<>
				<div>
					<label>{name}: </label>
					<Field
						name={name}
						type={name}
						component="input"
					></Field>
				</div>
			</>
		)
	}

	return (
		<>
			<Form
				onSubmit={ mySignup }
				render={ ({handleSubmit}) => {
					return (
						<>
							<form onSubmit={handleSubmit}>
								{ myInput("email") }
								{ myInput("password") }
								<button>signup</button>
							</form>
						</>
					)
				}}
			>

			</Form>

		</>
	)
}
