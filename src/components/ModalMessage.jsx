import React, { useState } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'

export default function ModalMessage({closeModal}) {

    const [userName , setUserName] = useState('')
    const [userEmail , setUserEmail] = useState('')
    const [userPhone , setUserPhone] = useState()
    const [userMessage , setUserMessage] = useState('')


    window.addEventListener('click', e => {
        if(e.target.id == 'close-modal'){
          closeModal()
        }
        
    })


    const clickSendMessage = ()=> {


        const infosMessage = {
            name : userName ,
            email : userEmail ,
            phone : userPhone ,
            body : userMessage
        }
        
        console.log(infosMessage);

        fetch('http://localhost:4000/v1/contact',{
            method : 'POST' ,
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(infosMessage)
        })
            .then(res =>{
                if(res.ok){
                    closeModal()
                }
            })
        
        
    }


  return (
    <div id='close-modal' className='fixed inset-0 z-50 w-screen h-screen backdrop-blur flex justify-center items-center '>


        <div className='w-[70%] m-auto bg-primaryHover p-6'>

            <div>
                <button onClick={()=> closeModal()}>
                <IoIosCloseCircleOutline size={25} />
                </button>
                
                <div className='flex justify-center border-b pb-3 mb-3'>
                    <h2 className='font-DanaBold text-2xl'>
                        دانش یار
                    </h2>
                </div>
            </div>

            <div className='flex flex-col gap-y-5 justify-center items-center'>
                <h5>ارتباط با ما </h5>

                <div className='w-1/5'>
                    <input className='w-full py-1 px-2 rounded-md text-sm border-2' type="text" placeholder='نام و نام خانوادگی ..' 
                    onBlur={(e)=> setUserName(e.target.value)}/>
                </div>
                <div className='w-1/5'>
                    <input className='w-full py-1 px-2 rounded-md text-sm border-2' type="number" placeholder='شماره تلفن ..' 
                    onBlur={(e)=> setUserPhone(e.target.value)}/>
                </div>
                <div className='w-1/5'>
                    <input className='w-full py-1 px-2 rounded-md text-sm border-2 ' type="text" placeholder='ایمیل ..'
                    onBlur={(e)=> setUserEmail(e.target.value)}/>
                </div>
                <div>
                    <textarea className='w-[600px] p-2 min-h-48' placeholder='پیغام خود را بنویسید ...'
                    onBlur={(e)=> setUserMessage(e.target.value)}>

                    </textarea>
                </div>

            </div>
            <div className='flex justify-center p-4 bg-primary text-white rounded-md cursor-pointer hover:bg-blue-400'>
                <button className='w-full h-full' 
                onClick={clickSendMessage}>
                    ارسال
                </button>
            </div>


        </div>


    </div>
  )
}
