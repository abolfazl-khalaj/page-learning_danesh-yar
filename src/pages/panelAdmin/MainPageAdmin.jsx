import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import SideBar from './components/SideBar'

export default function Index() {
  return (
    <div>
      <header>
        <Header/>
      </header>

      <aside>
        <SideBar/>
      </aside>      
        <main className='w-[1200px] absolute left-0 top-[130px]'>
          <Outlet/>
        </main>
      
    </div>
  )
}
