import React, { useContext } from 'react'
import { AiOutlineLogout } from 'react-icons/ai'
import { BiMessage, BiMessageRoundedCheck } from 'react-icons/bi'
import { BsCart2 } from 'react-icons/bs'
import { CgMenuRight } from 'react-icons/cg'
import { CiBoxList } from 'react-icons/ci'
import { FaUsers } from 'react-icons/fa'
import { FiGift, FiMessageCircle } from 'react-icons/fi'
import { GoFileDirectory } from 'react-icons/go'
import { IoBarChartOutline, IoHomeOutline } from 'react-icons/io5'
import { RiArticleLine } from 'react-icons/ri'
import { VscFileSubmodule } from 'react-icons/vsc'
import { Link, useNavigate } from 'react-router-dom'
import Supporter from './Supporter'
import { LuSend } from 'react-icons/lu'
import ContextApi from '../../../context/ContextApi'

export default function SideBar() {

    const context = useContext(ContextApi)


  return (
    <div className='w-80 flex flex-col justify-between pb-10 h-full fixed inset-0 bg-primary pt-4 text-white z-50'>
        {/* header and maine aside */}
        <div>

            {/* header aside */}
            <div className='flex pb-4 justify-between items-center gap-1 border-b-2 px-4 border-emerald-400'>
                <span className='flex flex-col'>
                    خوش آمدید 
                    <span className='font-DanaBold'>
                        {context?.infoUser.name}
                    </span>
                    <span className='text-blue-300'>
                        مدیر پروژه
                    </span>
                </span>
                <div>
                    <img src="../public/img/profile/profile.png" alt=""
                    className='w-36 rounded-xl' />
                </div>
            </div>

            {/* mine aside */}
            <div className='py-3'>
                <h2 className='px-4 font-DanaBold'>
                    عمومی
                </h2>
                <ul className='py-3
                 children:flex
                 children:items-center
                 children:gap-2
                 children:py-2
               childrenHover:bg-primary-hover
                 children:px-4 
                 children:transition-colors 
                 children:cursor-pointer'>
                    <Link to={'/'}>
                        <LuSend />
                            صفحه سایت   
                    </Link>
                    <Link to={''}>
                        <IoHomeOutline />
                            صفحه اصلی
                    </Link>
                    <Link to={'sale'}>
                        <IoBarChartOutline />
                            فروش
                    </Link>
                    <Link to={'courses'}>
                        <VscFileSubmodule />
                        دوره ها
                    </Link>
                    <Link to={'sessions'}>
                        <GoFileDirectory />
                        جلسات دوره
                    </Link>
                    <Link to={'articles'}>
                        <RiArticleLine />
                            مقالات 
                    </Link>
                    <Link to={'comments'}>
                        <FiMessageCircle />
                            کامنت ها
                    </Link>
                    <Link to={'users'}>
                        <FaUsers/>
                            کابرها 
                    </Link>
                    <Link to={'menus'}>
                        <CgMenuRight />
                            منو ها  
                    </Link>
                    <Link to={'categories'}>
                        <CgMenuRight />
                            دسته ها  
                    </Link>
                    <Link to={'tickets'}>
                        <BiMessageRoundedCheck />
                            تیکت ها
                    </Link>
                    <Link to={'message'}>
                        <BiMessage/>
                            پیغامات
                    </Link>
                    <Link to={'discounts'}>
                        <FiGift/>
                            تخفیف ها 
                    </Link>
                    <Link to={'discounts'}>
                        <FiGift/>
                            کد های تخفیفاتی
                    </Link>

                </ul>
            </div>

        </div>

    

    </div>
  )
}
