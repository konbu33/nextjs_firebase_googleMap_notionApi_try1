

function messageBox() {
	return (
		<>
			<div className="m-10 p-6 max-w-sm mx-auto rounded-xl shadow-md flex items-center space-x-4 newmoph_shadow_o shape_bg" >
			  <div className="flex-shrink-0 rounded-full newmoph_shadow_o_inset p-3">
			    <img className="h-12 w-12" src="../vercel.svg" alt="ChitChat Logo" />
			  </div>
			  <div>
			    <div className="text-xl font-medium text-black">ChitChat</div>
			    <p className="text-gray-500">You have a new message!</p>
			  </div>
			</div>
		</>
	)
}

export default function chat() {
	return (
		<>
			<div className=" main_bg w-full p-4 ">
				{ messageBox() }
				{ messageBox() }
				{ messageBox() }
			</div>
		</>
	)
}

