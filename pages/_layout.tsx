import { useContext } from 'react'
import { AuthContext } from './context/fbauth'
import router from 'next/router'
import firebae from '../firebase'
import Link from 'next/link'

export default function _layout({children}) {

	const { currentUser } = useContext(AuthContext)


	function login() {
		router.push("/login")
	}

	function logout() {
		firebae.auth().signOut()
			.then( () => {
				console.log('logout success: ')
			})
			.catch( error => {
				console.log('logout error code: ', error.code, 'logout error message: ', error.message)
			})

	}

	function signup() {
		router.push("/signup")
	}

	function appLogo() {
		return (
			<>
				<div className="text-3xl">
					<Link href="/">
						<a>
							<div className="flex"> 
								<p className="text-blue-500">G</p>
								<p className="text-red-500">o</p>
								<p className="text-yellow-500">o</p>
								<p className="text-blue-500">g</p>
								<p className="text-green-500">l</p>
								<p className="text-red-500">e</p>
							</div>
						</a>
					</Link>
				</div>
			</>
		)
	}

	function appHeader() {
		const btn = "bg-gray-200 hover:bg-gray-100 rounded-sm shadow-md py-1 px-2 w-20"

		return (
			<header className="flex p-4">
				{ appLogo() }
				<div className="flex-grow"></div>
				{ 
					currentUser ? 
						<div className="flex space-x-4">
							<div>currentUser: { currentUser ? currentUser.email : "Not Login"}</div>
							<button className={btn} onClick={logout}>logout</button> 
						</div>
					:
						<div className="flex space-x-4">
							<div><button className={btn} onClick={login}>login</button></div>
							<div><button className={btn} onClick={signup}>signup</button></div>
						</div>
				}
			</header>
		)
	}

	function appMenu() {
		return (
			<>
				<h1 className="text-2xl p-2 pr-40">menu</h1>
				<ul className="px-8 py-2">
        	<li><Link href="/about"><a>about</a></Link></li>
        	<li><Link href="/login"><a>login</a></Link></li>
        	<li><Link href="/chat"><a>chat</a></Link></li>
        	<li><Link href="/test"><a>test</a></Link></li>
        	<li><Link href="/incident"><a>incident</a></Link></li>
        	<li><Link href="/api/hello"><a>/api/hello</a></Link></li>
				</ul>
			</>
		)
	}

	function appFooter() {
		return (
			<footer className="flex justify-center py-1">
				<small>&copy; corp.inc</small>
			</footer>
		)
	}

	return (
		<div className="flex flex-col h-full">
			<div className="shadow-md">
				{ appHeader() }
			</div>
			<div className="flex h-full shadow-md">
				<div className="w-auto">
					{ appMenu() }
				</div>
				<div className="flex flex-grow">
					{children}
				</div>
			</div>
			<div className="">
				{ appFooter() }
			</div>
		</div>
	)
}
