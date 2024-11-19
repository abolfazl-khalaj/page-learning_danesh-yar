import React from 'react'
import { IoHomeOutline } from 'react-icons/io5'
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md'

export default function BreadCrumb(props) {
  return (
    <ul className='flex items-center justify-around p-2 text-white rounded-lg gap-x-1 bg-gray-400 w-[70%]
    children:flex children:items-center' >
      <IoHomeOutline size={20}/>
      <li>
        خانه 
      </li>
      <MdKeyboardDoubleArrowLeft />
      <li>
        {props.category}
      </li>
      <MdKeyboardDoubleArrowLeft />
      <li>
        {props.name}
      </li>
    </ul>
  )
}
