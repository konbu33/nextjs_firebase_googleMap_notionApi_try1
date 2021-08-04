import '../styles/globals.css'
import '../styles/newmoph.css'
// import 'tailwindcss/tailwind.css'

import { AuthProvider } from './context/fbauth'
import { useEffect } from 'react'
import _layout from './_layout'

function MyApp({ Component, pageProps, router }) {

  useEffect( () => {
    if ( router.pathname === "/" ) return 
  }, [router.pathname])

  return (
    <AuthProvider>
      <_layout>
        <Component {...pageProps} />
      </_layout>
    </AuthProvider>
  )
}

export default MyApp
