import React, { useContext, useEffect, useState } from 'react'
import { BiCheck } from 'react-icons/bi'
import { FaRegMessage } from 'react-icons/fa6'
import { PiShieldWarning } from 'react-icons/pi'
import { useParams } from 'react-router-dom'
import ContextApi from '../context/ContextApi'
import { useDispatch } from 'react-redux'
import { sendCommentsCourse } from '../redux/store/Comments'


export default function CommentSend() {

    const { shortName } = useParams()
    const [commentText , setCommentText] = useState('')
    const context = useContext(ContextApi)
    
    const dispatch = useDispatch()

    const sendComment = () => {

        const infoComment = {
            body : commentText,
            courseShortName : shortName ,
            score : 5
        }

        dispatch(
            sendCommentsCourse(infoComment)
        )

    }



  return (
    <div>

        <div className='flex gap-2'>
        <div>
            <FaRegMessage size={25} className='text-primary'/>
        </div>
        <h4 className='text-2xl font-DanaBold'>ثبت نظر </h4>
        </div>

        <div className='mt-10'>
        <div className='flex gap-1 font-DanaMedium'>
            <PiShieldWarning size={20}/>
            <span>قوانین ثبت دیدگاه</span>
        </div>
        <ul className='children:text-sm
        children:flex children:gap-1 children:items-end'>
            <li>
            <BiCheck size={23} className='text-primary'/>
            متن تستی برای در لورم اپیسون ..
            </li>
            <li>
            <BiCheck size={23} className='text-primary'/>
            متن تستی برای در لورم اپیسون ..
            </li>
            <li>
            <BiCheck size={23} className='text-primary'/>
            متن تستی برای در لورم اپیسون ..
            </li>
            <li>
            <BiCheck size={23} className='text-primary'/>
            متن تستی برای در لورم اپیسون ..
            </li>
        </ul>

        </div>

        <div className='my-5 bg-slate-200 p-5'>

        {
            Boolean(context.infoUser.length) ?
            <>


            <div>
                <textarea name="" id="" 
                className='w-full h-52 p-5 text-sm text-gray-700 outline-[0.50px]' placeholder='نظر خود را برای ما ارسال کنید  :)'
                onBlur={(e)=>setCommentText(e.target.value)}>

                </textarea>

            </div>

            <div className='flex justify-end '>
                <button 
                className='bg-primary text-white py-2 px-5 rounded-lg text-lg font-DanaMedium'
                onClick={sendComment}>ارسال</button>
            </div>

            </> 
            :
            <div className='flex justify-center items-center text-xl font-DanaMedium'>
            <span>برای ثبت نظر باید در سایت ثبت نام کرده باشید ..</span>
            </div>
        }


        </div>

    </div>
  )
}
