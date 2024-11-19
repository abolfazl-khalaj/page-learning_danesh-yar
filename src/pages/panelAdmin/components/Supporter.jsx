import React from 'react'
import { SlEye } from 'react-icons/sl'

export default function Supporter({name}) {
  return (
    <li className='flex justify-between p-4 items-center rounded-lg border mt-3'>
      <div className="flex items-center">
        <div className="flex flex-col gap-y-1">
            <span className="admin-name">
              {name}
            </span>

            <span className="text-xs">
              پشتیبان 
            </span>
        </div>
      </div>


    </li>
  )
}
