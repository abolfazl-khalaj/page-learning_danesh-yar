import React from 'react'
import { MdErrorOutline } from 'react-icons/md'

export default function ErrorBox({message}) {
  return (
    <div className='w-[90%] absolute h-28 flex m-auto items-center justify-around bg-red-500 rounded-lg'>
      <MdErrorOutline size={35} color='#ffff'/>
      <p className='text-slate-200 font-DanaBold'>
        {message}
      </p>
      <MdErrorOutline size={35} color='#ffff'/>
    </div>
  )
}
