import React from 'react'
import { CiCircleCheck } from 'react-icons/ci'
import { IoIosCloseCircleOutline } from 'react-icons/io';

export default function Message(props) {
  
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
          {props.name}
        </td>
        <td>
          {props.email}
        </td>
        <td>
          {props.phone}
        </td>
        <td>
          <button className='py-2 px-4 bg-blue-400 text-white'
          onClick={()=> props.showMessage(props.body)}>
            نمایش پیغام
          </button>
        </td>
        <td>
          <button className='py-1 px-3 bg-primary text-white'
          onClick={()=>props.answerMessage(props.email)}>
            پاسخ 
          </button>
        </td>
        <td>
          <button className='py-1 px-3 bg-red-500 text-white'
          onClick={()=>{
            props.removeMessage(props._id)
          }}>
            حذف
          </button>
        </td>
    
      </tr>
      )
}
