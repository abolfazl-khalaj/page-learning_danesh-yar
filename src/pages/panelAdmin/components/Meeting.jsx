import React from 'react'

export default function Meeting(props) {
    return (
        <tr className='border-b-2 border-primary'>

            <td>
                {props.title}
            </td>
            <td>
                {props.time}
            </td>

            <td>
                {props.course.name}
            </td>
            <td>
                <button className='py-1 px-3 bg-red-500 text-white'
                onClick={()=>props.removeMeeting(props._id)}>
                    حذف
                </button>
            </td>
    
        </tr>
      )
}
