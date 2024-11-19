import React, { useContext, useEffect, useState ,useRef } from 'react'
import Course from '../components/Course'
import { FcAssistant, FcConferenceCall, FcIdea, FcReading } from 'react-icons/fc'
import Slogan from '../components/Slogan'
import Article from '../components/Article'
import { Link } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useDispatch, useSelector } from 'react-redux'
import { getCoursesFromServer } from '../redux/store/Courses'
import { getCoursesPopularFromServer } from '../redux/store/CoursesPopular'
import { getArticlesFromServer } from '../redux/store/Articles'
import { getInfosMeFromServer } from '../redux/store/AuthMe'


export default function Main() {
  
  const dispatch = useDispatch()
  const {courses , loadingCourses} = useSelector(state => state.courses)
  const {coursesPopular , loadingCoursesPopular} = useSelector(state => state.coursesPopular)
  const {articles , loadingArticles} = useSelector(state => state.articles)
  
  const authMe = useSelector(state => state.infosMe)
  
  
  useEffect(()=>{
    
    dispatch(
      getInfosMeFromServer()
    )
    dispatch(
      getCoursesFromServer()
    )
    dispatch(
      getCoursesPopularFromServer()
    )
    dispatch(
      getArticlesFromServer()
    )

  },[])
  


  return (
    <>
      <div className='mb-10'>
        
        <div className='m-auto w-[80%] flex items-center justify-between'>

          <div className='flex flex-col gap-4'>
            <h1 className='font-MorabbaBold text-4xl'>
              دانش یار
            </h1>
            <p className='font-DanaBold'>
              گروه دانش یار همراه و یار همیشگی شماست ..
            </p>
            <p className='font-DanaMedium w-[412px]'>
              ما آمدیم تا به شما آموزش هایی بدهیم که بتونید به بهترین درامد ها 
              و آینده ای موفق آمیز برای شما بسازیم  . همراه ما باشید ..
            </p>
            <Link to={'/category-courses/all'} className='bg-primaryHover py-2 text-center text-slate-600 font-DanaBold rounded-md w-40'>تمام دوره ها </Link>
          </div>

          <img src="../public/img/header.png" alt="" />

        </div>

      </div>

      <div className='mb-10'>        
        <h2 className='font-DanaBold text-2xl'>
          جدید ترین دوره ها ..
        </h2>

        <div className='row mt-10 flex flex-wrap justify-between gap-y-6'>

          {
            courses &&
            courses.slice( 0 , 8 ).map(course => (
              <Course key={course._id} {...course}/>
            ))
          }
        </div>

      </div>

      <div className='mb-10'>
        
      <h2 className='font-DanaBold text-2xl'>
      مقالات ما ..
      </h2>


        <div className='mt-10 flex flex-wrap gap-4'>

          {
            articles.slice(0,4).map(article => (
              <Article key={article._id} {...article}/>
            ))
          }



        <Link to={'/category-articles'} className='flex items-center justify-center w-[14%] gap-2 bg-primaryHover text-white font-DanaBold '>
          بقیه مقاله ها 
          <BiArrowBack />
        </Link>

        </div>
      </div>


      <div className='mb-10'>

        <h2 className='font-DanaBold text-2xl'>
          چرا شما باید همراه ما باشید و به ما اعتماد کنید ؟
        </h2>
        
        <div className='flex justify-between flex-wrap mt-10 gap-y-5'>

          <Slogan 
          icon={<FcConferenceCall />}
           title={'مهم ترین موضوع برای ما راضیت شماست چون '}
           description={'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا'}
           />

          <Slogan 
          icon={<FcAssistant />}
          title={' پشتیبانی همیشگی از طرف ما'}
          description={' لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که ام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'} />

          <Slogan
          icon={<FcReading />}
          title={'به روز بودن مطالب ما'}
          description={'            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'}
          />

          <Slogan
          icon={<FcIdea />}
          title={'اگاه تر از هرکسی میشید'}
          description={' ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم استان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'}
          />

        </div>

      </div>


      <div className='mb-10'>

        <h2 className='font-DanaBold text-2xl'>
          دوره های محبوب ..
        </h2>

        <div className='row flex flex-wrap mt-10 justify-between gap-y-6'>

          <Swiper
          slidesPerView={4}
          spaceBetween={30}
          autoplay={{
            delay: 1200,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >

          {
            coursesPopular.map(course =>(
              <SwiperSlide key={course._id}  className='children:w-full'>
                  <Course  {...course}/>
                </SwiperSlide>

            ))
          }
        </Swiper>



        </div>

      </div>
      
        
      
    </>
  )
}
