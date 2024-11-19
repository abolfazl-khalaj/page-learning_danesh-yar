import React from 'react'

export default function CourseDetailBox({title ,value}) {
  return (
    <div className='flex gap-2 items-end'>
    <span className='font-DanaMedium'>
      {title} :
    </span>
    <span className='text-sm'>
      {value}
    </span>
  </div>
  )
}
