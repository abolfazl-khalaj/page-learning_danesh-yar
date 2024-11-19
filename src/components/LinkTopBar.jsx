import React from 'react'
import { Link } from 'react-router-dom'

export default function LinkTopBar({title , link}) {
  return (
    <Link to={`/course-info/${link}`} className='border-b-[1px] border-primary text-xs'>
      { title }
    </Link>
  )
}
