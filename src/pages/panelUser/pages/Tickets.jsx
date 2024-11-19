import React from 'react'
import ListTickets from '../components/ListTickets'
import HeaderPanel from '../components/HeaderPanel'
import SendTicket from '../components/SendTicket'

export default function Tickets() {
  return (
    <div>
            <HeaderPanel/>

            <div className='p-8 border-2'>

                <div>

                    <div>
                        <span className='font-DanaBold'>ارسال تیکت </span>
                        <SendTicket/>
                    </div>
                    <div>
                        <span className='font-DanaMedium text-xl'>تیکت ها</span>
                        <ListTickets/>
                    </div>

                </div>

            </div>


    </div>
  )
}
