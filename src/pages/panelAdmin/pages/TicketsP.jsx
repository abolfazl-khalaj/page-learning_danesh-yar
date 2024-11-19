import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { answerTicketsFromServer, getTicketsFromServer } from '../../../redux/store/Tickets'
import Ticket from '../components/Ticket'
import ErrorBox from '../components/ErrorBox'
import Swal from 'sweetalert2'

export default function Tickets() {

  const [trigger , setTrigger] = useState(0)

  const dispatch = useDispatch()
  const {tickets , loadingTickets} = useSelector(state => state.tickets)

  

  useEffect(()=> {

    dispatch(
      getTicketsFromServer()
    )

  },[trigger])


  const removeTicketHandler = (ticketId) => {

  }

  const answerTicketHandler = (ticketId) => {

    const { value: text } = Swal.fire({
      input: "textarea",
      inputLabel: "Message",
      inputPlaceholder: "Type your message here...",
      inputAttributes: {
        "aria-label": "Type your message here"
      },
      showCancelButton: true
    }).then(res => {

      if(res.value){

        const answer = {
          body : res.value,
          ticketID : ticketId
        }

        dispatch(
          answerTicketsFromServer(answer)
        )

        setTrigger(prev => prev + 1)
      }
      
    })

  }
  const showMessageTicketHandler = (body) => {

    Swal.fire({
      title: body ,
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      }
    });

  }





  

  return (
    <div className='mb-28'>
    <h2 className='mr-5 font-DanaBold text-2xl'>
      تیکت ها
    </h2>

    <div className='w-full mt-10'>
      <table className='w-[90%] mx-auto text-center '>
        <thead>
          <tr className='border-b-2 border-primary'>
          <th>
            پاسخ
          </th>
          <th>
            عنوان
          </th>
          <th>
            ارسال کننده
          </th>
          <th>
            سطح اولویت 
          </th>
          <th>
            درباره 
          </th>
          <th>
            نوع تیکت 
          </th>
          <th>
            تایخ ثبت 
          </th>


        </tr>
        </thead>
        


        <tbody>

          {
            tickets.length > 0 && tickets ? (

              tickets.map(ticket => (
                <Ticket key={ticket._id} {...ticket}
                removeTicket={removeTicketHandler}
                answerTicket={answerTicketHandler}
                showMessageTicket={showMessageTicketHandler}/>
              ))

              
            )
            :
            <ErrorBox message={'تیکتی ارسال نشده'}/>
          }

        </tbody>

      </table>
    </div>
  </div>
  )
}
