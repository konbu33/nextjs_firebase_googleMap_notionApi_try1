import Link from 'next/link'
import Head from 'next/head'
import firebase from '../firebase'
import { useContext } from 'react'
import { AuthContext } from './context/fbauth'

import useRequireLogin from './hooks/useRequireLogin'

export default function about() {

  // useRequireLogin()

  const { currentUser } = useContext(AuthContext)

  return (
    <>
      <Head>
        <title>about</title>
      </Head>

      <div><Link href="/"><a>top</a></Link></div>
      <p className="text-xs">このページはaboutページです。</p>
      <p className="text-sm">このページはaboutページです。</p>
      <p className="text-base">このページはaboutページです。</p>
      <p className="text-lg">このページはaboutページです。</p>
      <p className="text-xl">このページはaboutページです。</p>

      <div className="bg-blue-100 p-5">
        <div className="bg-white rounded-xl shadow-md flex p-6 max-w-sm mx-auto space-x-4 items-center">
          <div className="flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
          </div>
          <div>
            <div className="text-xl font-medium text-black">ChitChat</div>
            <p className="text-gray-500">You have a new message!</p>
          </div>
        </div>
      </div>

      <div className="grid grid-flow-col auto-cols-max">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>

      <div className="grid grid-flow-row auto-rows-max">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>

      <div className="grid grid-flow-col grid-cols-3 grid-rows-4 gap-20">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
      </div>

      <div className="flex justify-between ...">
        <div className="order-10">3</div>
        <div>2</div>
        <div>1</div>
      </div>
    </>
  )
}
