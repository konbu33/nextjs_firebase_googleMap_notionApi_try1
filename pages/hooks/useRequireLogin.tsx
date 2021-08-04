import router from 'next/router'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../context/fbauth' 

export default function useRequireLogin() {
	const { currentUser } = useContext(AuthContext)

	useEffect( () => {
		if ( router.pathname === "/") return
		if (!currentUser && router.pathname !== "/" ) router.push("/login")
		// if ( currentUser && router.pathname === "/login" ) router.push("/")
	}, [])
}
