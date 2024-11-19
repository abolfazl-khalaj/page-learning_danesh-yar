import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineLogout } from 'react-icons/ai'
import { BiMoon } from 'react-icons/bi'
import { CiSearch } from 'react-icons/ci'
import { IoNotificationsOutline } from 'react-icons/io5'
import ContextApi from '../../../context/ContextApi'
import MessageNotification from './MessageNotification'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {getInfosMeFromServer} from '../../../redux/store/AuthMe'


export default function TopBar() {

    const context = useContext(ContextApi)
    const [notificationsAdmin , setNotificationAdmin] = useState([])
    const dispatch = useDispatch()
    const infosMe = useSelector(state => state.infosMe)

    const navigator = useNavigate()
    

    useEffect(()=> {

        dispatch(
            getInfosMeFromServer()
        )
        setNotificationAdmin(infosMe.notifications)

    },[])


    

    function clickSeeNotificationHandler (id) {
        console.log(id);
        
    }

    const clickLogoutHandler = () => {
        
        const isLogout = confirm('از خروج پنل مطمعن هستید ؟')

        if(isLogout){
            context.logout()
            navigator('/')
        }
        
        
    }






  return (
    <div className='fixed left-0 h-20 px-10 shadow-slate-300 shadow-lg  w-[80%] flex justify-end items-center backdrop-blur z-40'>

      
        <div className='flex gap-5 childrenHover:cursor-pointer'>
            <div>
                <button onClick={clickLogoutHandler}>
                    <AiOutlineLogout size={25} color='#ef4444' />
                </button>
            </div>
            <div className='relative group transition delay-75'>
                <div>
                    <IoNotificationsOutline size={25} color='#0b5d74' />
                </div>
                <div className='invisible opacity-0 group-hover:visible  group-hover:opacity-100 absolute top-10 left-2 w-48 p-2 bg-primary transition-all delay-100'>

                    {
                        notificationsAdmin ? (
                            notificationsAdmin.map(notification => (                                <MessageNotification title={notification.msg} notId={notification._id} funcSeeNot={clickSeeNotificationHandler}/>

                            ))
                        )
                        :
                        (
                            <div className='border-b-2 my-2 border-gray-400 flex justify-between items-center'>
                                <p className='text-xs text-white'>
                                    پیغامی ندارید
                                </p>
                            </div>
                        )
                    }

                </div>
            </div>

        </div>

        
    </div>
  )
}
