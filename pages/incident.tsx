import process from './process'

export default function incident() {
	const processName = "incident"
	return (
		<>
			{ process(processName) }
		</>
	)
}