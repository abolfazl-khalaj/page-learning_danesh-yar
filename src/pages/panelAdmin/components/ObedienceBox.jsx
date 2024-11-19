import React from 'react'

export default function ObedienceBox({ value , Icon}) {
  return (
    <div className='flex justify-center items-center  gap-x-4 text-zinc-700 bg-primaryHover w-1/6 py-5 rounded-lg'>
      <div className=' flex items-center'>
        {
            Icon
        }
      </div>
      <div>
        <span className='font-DanaBold'>
            {value}
        </span>
      </div>
    </div>
  )
}
