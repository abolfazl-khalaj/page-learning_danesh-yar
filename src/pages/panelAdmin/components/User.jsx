import React from 'react'

export default function User(props) {
  return (
    <tr className='border-b-2 border-primary'>

        <td>
            <span className='text-sm line-clamp-1'>
                {props.name}
            </span>
        </td>

        <td>
            <span className='text-sm line-clamp-1'>
                {props.username}
            </span>
        </td>

        <td>
            <span className='text-sm line-clamp-1'>
                {props.email}
            </span>
        </td>
        <td>
            <span className='text-sm line-clamp-1'>
                {props.phone}
            </span>
        </td>
        <td>
            <button className='py-1 px-3 bg-red-500 text-white'
            onClick={()=>props.removeUser(props._id)}>
                حذف
            </button>
        </td>

    </tr>
  )
}
