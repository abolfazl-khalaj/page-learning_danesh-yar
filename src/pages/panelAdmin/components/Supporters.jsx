import React, { useEffect } from 'react'
import Supporter from './Supporter'


export default function Supporters(props) {

  const admins = props.users.filter(user => user.role === 'ADMIN')

  return (
    <div className='w-1/3 border border-primaryHover p-4 rounded-lg '>
        <h3 className='font-DanaMedium'>پشتیبان ها</h3>
        <ul className="mt-3">

        {
          admins.map(admin => (

            <Supporter key={admin._id} {...admin}/>

          ))
        }


              
        </ul>
  
    </div>
  )
}
