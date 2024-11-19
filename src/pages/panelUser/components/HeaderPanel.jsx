import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderPanel() {
  return (
    <div className='py-3 mb-16 px-5 bg-primaryHover'>

        <ul className='flex items-center gap-x-4 text-zinc-700'>
            <li>
                <Link to={'/panel-user/ticket'}>تیکت ها</Link>
            </li>
            <li>
                <Link to={'/panel-user/courses-me'}>دوره های من </Link>
            </li>
        </ul>

    </div>
  )
}
