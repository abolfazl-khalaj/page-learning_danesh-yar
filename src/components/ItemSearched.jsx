import React from 'react'
import { Link } from 'react-router-dom'

export default function ItemSearched({href , title , description}) {
  return (
    <li className='flex flex-col border-b text-sm font-DanaMedium'>
        <Link to={href} className='line-clamp-1'>
            {title}
        </Link> 
        <span className='text-xs text-zinc-300 line-clamp-1'>
            {description}
        </span> 
    </li>
  )
}
