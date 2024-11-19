import React, { useEffect, useState } from 'react'
import { BiLogoGithub, BiLogoInstagram, BiLogoLinkedin, BiLogoTelegram } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { sendEmail } from '../redux/store/SendEmail'
import { getCoursesFromServer } from '../redux/store/Courses'
import { getArticlesFromServer } from '../redux/store/Articles'
import { ArticleTwoTone } from '@mui/icons-material'


export default function Footer() {


    const [userEmail , setUserEmail] =  useState()
    const dispatch = useDispatch()
    const { courses } =  useSelector(state => state.courses)
    const { articles } = useSelector(state => state.articles)


    const filteredCourses = courses
    .filter((course) => course.registers !== 0)
    .sort((a, b) => b.registers - a.registers)
    .slice(0 , 5);


    const clickSendEmailHandler = ()=> {

        const emailUser = {
            email : userEmail
        }

        dispatch(
            sendEmail(emailUser)
        )
        dispatch(
            getCoursesFromServer()
        )
        dispatch(
            getArticlesFromServer()
        )
    }


  return (
    <div className='px-28 py-20  flex flex-col gap-5 children:flex children:justify-between bg-primaryHover text-white'>

        <div className='mb-2 flex items-end'>
            <div>

                <h2 className='text-3xl font-MorabbaBold '>دانش یار</h2>
                <h2 className='pt-3 text-yellow-100'>danesh yar</h2>

            </div>
            <div>
                <h4 className='text-xl font-DanaMedium '>
                همیشه و همه جا یار شماست

                </h4>
                <div>
                    <span className='text-zinc-600 text-xs font-DanaMedium'>
                        جهت اطلاع ارسانی خبرنامه ها و کمیپین تبلیغاتی و ...
                    </span>
                    <div className='relative flex items-center w-80'>
                        <input className='w-full text-sm py-1 px-2 rounded-sm text-black outline-none' type="email" placeholder='ایمیل خود را وارد کنید '
                        onBlur={(e)=> setUserEmail(e.target.value)} />
                        <button className='absolute left-0 text-white font-DanaMedium p-1 text-sm bg-primary'
                        onClick={clickSendEmailHandler}>عضویت</button>
                    </div>
                </div>
            </div>
        </div>
        
        <div className='border-y border-primary py-3'>

            <div className='w-2/5'> 
                <h3 className='font-DanaBold'>درباره ما</h3> 
                <p className='text-zinc-600'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.

                </p>
            </div>

            <div>
                <h3 className='font-DanaBold'>
                    پربازدید ترین دوره ها
                </h3>
                <ul className='text-slate-600 flex flex-col gap-1 text-sm'>
                    {
                        filteredCourses?.map(course => (
                            <Link to={`/course-info/${course.shortName}`} key={course._id}>{course.name}</Link>

                        ))
                    }

                </ul>
            </div>

            <div>
                <h3 className='font-DanaBold'>جدید ترین مقالات</h3>
                <ul className='text-slate-600 flex flex-col gap-1 text-sm'>
                    {
                        articles?.map(article => (
                            <Link to={`/article-info/${article.shortName}`} key={article._id}>{article.title}</Link>

                        ))
                    }
                </ul>
            </div>

            <div>
                <img src="../public/img/enamad.png" alt="" />
            </div>

        </div>

        <div>

            <h3 className='font-DanaBold'>
            در فضای مجازی همراه ما باشید    
            </h3>

            <ul className='flex gap-3 children:text-primary '>
                <Link>
                    <BiLogoInstagram size={30}/>
                </Link>
                <Link>
                    <BiLogoTelegram size={30}/>
                </Link>
                <Link>
                    <BiLogoGithub size={30}/>
                </Link>
                <Link>
                    <BiLogoLinkedin size={30}/>
                </Link>
            </ul>

        </div>
      
    </div>
  )
}
