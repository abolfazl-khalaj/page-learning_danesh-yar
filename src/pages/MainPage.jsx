import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

export default function MainPage() {
  return (
    <div>
      <Header/>
        <main className='w-[80%] m-auto my-20'>
          <Outlet/>
        </main>
      <Footer/>
    </div>
  )
}
