import React from 'react'
import { CiCircleCheck } from 'react-icons/ci'
import { IoIosCloseCircleOutline } from 'react-icons/io'

export default function comment(props) {
  return (
    <tr className='h-16 border-b-2 border-primary text-sm'>
    <td >
      <div className='flex justify-center items-center'>

        {
          props.answer === 1 ?
            <CiCircleCheck size={20} color='green'/>
          :
            <IoIosCloseCircleOutline size={20} color='red' />

        }

      </div>
    </td>
    <td>
      {props.title}
    </td>
    <td>
      {props.user}  
    </td>
    <td>
      {
        props.priority === 1 ? 'بسیار بالا' :
        props.priority === 2 ? ' بالا' :
        props.priority === 3 ? ' معمولی':
        props.priority === 4 ? 'بسیار ساده':'1'
      }
    </td>
    <td>
      {props.departmentSubID}
    </td>
    <td>
      {props.departmentID}
    </td>
    <td>
      {props.createdAt.slice(0,10)}
    </td>
    <td>
      <button className='py-2 px-4 bg-blue-400 text-white'
      onClick={()=>props.showMessageTicket(props.body)}>
        نمایش پیغام
      </button>
    </td>
    <td>
      <button className='py-1 px-3 bg-primary text-white'
      onClick={()=>props.answerTicket(props._id)}>
        پاسخ 
      </button>
    </td>
    <td>
      <button className='py-1 px-3 bg-red-500 text-white'
      onClick={()=>props.removeTicket(props._id)}>
        حذف
      </button>
    </td>

  </tr>
  )
}
