import React from 'react'

export default function MessageNotification({title , notId , funcSeeNot}) {
  return (
    <div className='border-b-2 my-2 border-gray-400 flex justify-between items-center'>
      <p className='text-xs text-white'>
          {title}
      </p>
      <button onClick={()=>funcSeeNot(notId)}>
        دیدم
      </button>
    </div>
  )
}
