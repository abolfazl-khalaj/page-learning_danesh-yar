

import ContextApi from '../../../context/ContextApi'
import { useContext, useEffect, useState } from 'react';
import ItemTicket from './ItemTicket';



export default function CustomizedAccordions() {





  const context = useContext(ContextApi)
  const [listTicketsMe , setListTicketsMe] = useState([])

  useEffect(()=>{

    fetch('http://localhost:4000/v1/tickets/user',{
      headers : {
        'Content-Type' : 'application/json',
        Authorization : `Bearer ${context.token}`
      },
    })
    .then(res => res.json())
    .then(result => setListTicketsMe(result))

  },[])

  console.log(listTicketsMe);









  return (
    <div className='my-5'>

      {
        listTicketsMe.length ?
          listTicketsMe.map(ticket => (

            <ItemTicket key={ticket._id} {...ticket}/>

          ))
          :
          <div className='p-4 bg-red-500 text-center'>
            <p className='text-white text-xl'>تیکت ارسال نکرده اید</p>
          </div>
      }


    </div>
  );
}
