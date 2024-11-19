import React from 'react'

export default function Slogan({icon , title , description}) {
  return (
    <div className='w-[49%] p-5 text-white  bg-primary rounded-md'>
        <div className='flex gap-3 items-end mb-3'>
            <div className='children:size-10'>
                {icon}
            </div>
            <h5 className='font-DanaMedium '>
                {title} ....
            </h5>
        </div>
        <p className='text-slate-200'>
            {description}
        </p>
    </div>
  )
}
