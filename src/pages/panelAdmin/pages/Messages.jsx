import React, { useContext, useEffect, useState } from 'react'
import Message from '../components/Message'
import ErrorBox from '../components/ErrorBox'
import ContextApi from '../../../context/ContextApi'
import Swal from 'sweetalert2'
import { answerMessagesFromServer, deleteMessagesFromServer, getMessagesFromServer } from '../../../redux/store/Messages'
import { useDispatch, useSelector } from 'react-redux'


export default function Messages() {

  const context = useContext(ContextApi)
  const [trigger , setTrigger] = useState(0)
  
  const dispatch = useDispatch()
  const {messages , loadingMessages} = useSelector(state => state.messages)

  useEffect(()=>{

    dispatch(
      getMessagesFromServer()
    )

  },[trigger])

  

  const removeMessageHandler = (contentId) => {


    Swal.fire({
      title: "از حذف پیغام مطمعن هستید ؟",
      icon: "question",
      position : 'center',
      iconHtml: "؟",
      confirmButtonText: "بله",
      cancelButtonText: "خیر",
      showCancelButton: true,
      showCloseButton: true
    })
    .then(res => {
      if(res.value){
        dispatch(
          deleteMessagesFromServer(contentId)
        )
        setTrigger(prev => prev + 1)

      }
      
    })
  }

  const answerMessageHandler = (email) => {


     Swal.fire({
      input: "textarea",
      inputLabel: "پاسخ پیغام",
      inputPlaceholder: "پاسخ خود را بنویسید ..",
      inputAttributes: {
        "aria-label": "Type your message here"
      },
      showCancelButton: true
    })
    .then(res => {

      if(res.value){

        const infoAnswerMessage = {
          email ,
          answer : res.value
        }
        
        dispatch(
          answerMessagesFromServer(infoAnswerMessage)
        )


      }

    })

  }

  const showMessageHandler = (body) => {

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
            پیغام ها 
          </h2>
    
          <div className='w-full mt-10'>
            <table className='w-[90%] mx-auto text-center '>
              
            <tr className='border-b-2 border-primary'>
              <th>
                پاسخ
              </th>
              <th>
                نام
              </th>
              <th>
                ایمیل
              </th>
              <th>
                شماره تلفن 
              </th>
    
    
            </tr>
    
            <tbody>

            {
              messages ? (
                messages.map(message => (

                  <Message key={message._id} {...message} 
                  removeMessage={removeMessageHandler}
                  answerMessage={answerMessageHandler}
                  showMessage={showMessageHandler}/>

                ))
              )
              :
              <ErrorBox message={'پیفامی ندارید..'}/>
            }


            </tbody>
    
            </table>
          </div>
        </div>
      )
}
