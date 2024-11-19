import React from 'react'

export default function Category(props) {
  return (
    <tr className='h-16 border-b-2 border-primary'>
 
        <td>
            {props.title}
        </td>
        <td>
            {props.name}
        </td>
        <td>
            <button className='py-1 px-3 bg-primary text-white'
            onClick={()=>props.updateCategory(props)}>
                تغییر
            </button>
        </td>
        <td>
            <button className='py-1 px-3 bg-red-500 text-white'
            onClick={()=>props.removeCategory(props._id)}>
                حذف
            </button>
        </td>


    </tr>
  )
}
