import React from 'react'

export default function Article(props) {
  return (
    <tr className='h-10 border-b-2 border-primary'>
        <td>
            {props.title}
        </td>
        <td>
            {props.createdAt.slice(0,10)}
        </td>
        <td>
            {props.creator.name}
        </td>
        <td>
            <button className='py-1 px-3 bg-red-500 text-white'
            onClick={()=>props.removeArticle(props._id)}>
                حذف 
            </button>
        </td>
    </tr>
  )
}
