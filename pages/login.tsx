import Link from 'next/link'
import Head from 'next/head'
import router from 'next/router'
import btn from './component/button'

import { Form, Field } from 'react-final-form'
import firebase from '../firebase'
import useRequireLogin from './hooks/useRequireLogin'

const myinput = (name) => {
  return (
    <>
      <div className="rounded-lg p-1">
        <label className=" hover:opacity-70" htmlFor={name}>{name}: 
          
        <Field
          name={name}
          type={name}
          id={name}
          component="input"
          className="focus:outline-none"
        />
        </label>
      </div>
    </>
  )
 }


function login() {

  useRequireLogin()

  function signin(e) {
    const { email, password } = e

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then( (userCredencial) => {
        const user = userCredencial.user
        router.push("/")
      })
      .catch( error => {
        console.log('login error code: ', error.code, 'login error message: ', error.message)
      })
  }


  return (
    <>
      <Head>
        <title>login</title>
      </Head>

      <div className="flex flex-col justify-center w-full items-center main_bg ">
        <div className="py-16 px-8 rounded-xl newmoph_shadow_o">
        <Form
          onSubmit={signin}
          render={ ({handleSubmit}) => {
            return (
              <form onSubmit={handleSubmit}>
                { myinput("email") }
                { myinput("password") }
                <div className="flex justify-center">
                  {/* <button className=" border-1 hover:bg-gray-100 bg-gray-200 rounded-sm shadow-md px-2 py-1 w-20">login</button> */}
                  { btn("login") }
                </div>
              </form>
            )
          }}
        >
        </Form>
        </div>
        </div>
    </>
  )
}

export default login