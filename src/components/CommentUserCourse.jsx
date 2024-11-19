import React from 'react'

export default function CommentUserCourse({name , role , body}) {
  return (
    <div className='w-10/12 m-auto p-3 border-2 rounded-md '>
        <div className='flex gap-x-3 border-b py-2'>
            <h5 className='text-lg font-DanaMedium'>{name}</h5>

            <span className='text-[10px] flex items-center px-3 bg-primaryHover rounded-md text-gray-500 text-center'>
                {
                    role == "ADMIN" ? 'مدرس' : 'کاربر'
                }
            </span>
        </div>

        <div className='py-2'>
            <p className='text-gray-600'>
                {body}
            </p>
        </div>
    </div>
  )
}
