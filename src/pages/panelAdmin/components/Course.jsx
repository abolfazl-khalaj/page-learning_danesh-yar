import React from 'react'

export default function Course(props) {


  return (
    <tr className='border-b-2 border-primary'>
        <td className='flex justify-center'>
            <img src='../public/img/product.png' className='size-14' alt='' />
        </td>
        <td>
            <span className='text-sm line-clamp-1'>
                {props.name}
            </span>
        </td>
        <td>
            {props.price !== 0 ? props.price.toLocaleString() : 'رایگان'}
        </td>
        <td>
            {props.registers}
        </td>
        <td>
            <span className='text-sm line-clamp-1'>
                {props.creator}
            </span>
        </td>

        <td>
            <span className='text-sm line-clamp-1'>
                {props.categoryID.title}
            </span>
        </td>
        <td>
            <span className='text-sm line-clamp-1'>
                {props.status == 'start' ? "درحال برگذاری" : "تکمیل شد"}
            </span>
        </td>
        <td>
            <button className='py-1 px-3 bg-red-500 text-white'
            onClick={()=>props.removeCourse()}>
                حذف
            </button>
        </td>

    </tr>
  )
}
