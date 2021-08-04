import React, { createContext, useState, useEffect } from 'react'
import firebase from '../../firebase'

const AuthContext = createContext({ currentUser: undefined})

function AuthProvider({children}) {
  const [ currentUser, setCurrentUser ] = useState(undefined)

  useEffect( () => {
    firebase.auth().onAuthStateChanged( (user) => {
      setCurrentUser(user)
    })
  }, [])

  return (
    <>
      <AuthContext.Provider value={{ currentUser: currentUser }}>
        {children}
      </AuthContext.Provider>
    </>
  )
}

export { AuthContext, AuthProvider }

