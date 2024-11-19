import React from 'react'
import { CiCircleCheck } from 'react-icons/ci'
import { IoIosCloseCircleOutline } from 'react-icons/io'

export default function comment(props) {


  return (
    <tr className='h-16 border-b-2 border-primary'>
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
      {props.creator.name}
    </td>
    <td>
      {props.course}
    </td>
    <td>
      {props.createdAt.slice(0,10)}
    </td>
    <td>
      {props.createdAt.slice(14,19)}
    </td>
    <td>
      <button className='py-2 px-4 bg-blue-400 text-white'
      onClick={()=>props.showComment(props.body)}>
        نمایش پیغام
      </button>
    </td>
    <td>
      <button className='py-1 px-3 bg-primary text-white'
      onClick={()=>props.answerComment(props._id)}>
        پاسخ 
      </button>
    </td>
    <td>
      <button className='py-1 px-3 bg-primary text-white'
      onClick={()=>props.acceptComment(props._id)}>
        تایید
      </button>
    </td>
    <td>
      <button className='py-1 px-3 bg-primary text-white'
      onClick={()=>props.rejectComment(props._id)}>
        رد کردن
      </button>
    </td>
    <td>
      <button className='py-1 px-3 bg-red-500 text-white'
      onClick={()=>props.removeComment(props._id)}>
        حذف
      </button>
    </td>

  </tr>
  )
}
