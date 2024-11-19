import React from 'react'

export default function ({id ,type ,href ,parent ,title,removeMenu}) {


    

  return (
    <tr className='h-16 border-b-2 border-primary'>
 
        <td>
            {title}
        </td>
        <td>
            {href}
        </td>
        {
            type === 'submenu' &&
            <td>
                {parent}               
            </td>
        }
        <td>
            <button className='py-1 px-3 bg-red-500 text-white'
            onClick={()=>removeMenu(id)}>
                حذف
            </button>
        </td>


    </tr>


  )
}
