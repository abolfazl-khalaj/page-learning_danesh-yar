import React, { useContext, useEffect, useState } from 'react'
import { BiCheck } from 'react-icons/bi'
import { FaHome } from 'react-icons/fa'
import { FaRegMessage } from 'react-icons/fa6'
import { IoHomeOutline } from 'react-icons/io5'
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md'
import { PiShieldWarning } from 'react-icons/pi'
import BreadCrumb from '../components/BreadCrumb'
import AccordionCourse from '../components/AccordionCourse'
import { useParams } from 'react-router-dom'
import CourseDetailBox from '../components/CourseDetailBox'
import CommentUserCourse from '../components/CommentUserCourse'
import CommentSend from '../components/CommentSend'
import { useDispatch, useSelector } from 'react-redux'
import { getCourseAccepted } from '../redux/store/CourseAccept'
import Swal from 'sweetalert2'
import ContextApi from '../context/ContextApi'

export default function mainCourse() {
  window.scroll(0,0)

  const context = useContext(ContextApi)
  const { shortName } = useParams();
  const dispatch = useDispatch();
  const { courseAccept, loadingCourseAcc } = useSelector(state => state.courses);
  const [comments, setComments] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [createdAt, setCreatedAt] = useState();
  const [updatedAt, setUpdatedAt] = useState();
  const [creatorCourse, setCreatorCourse] = useState([]);
  const [categoryId, setCategoryId] = useState([]);
  const [infosCourse, setInfosCourse] = useState([]);

  useEffect(() => {
    if (shortName) {
      dispatch(getCourseAccepted(shortName));
    }
  }, [shortName, dispatch]);

  useEffect(() => {
    if (courseAccept) {
      setComments(courseAccept.comments);
      setSessions(courseAccept.sessions);
      setCreatedAt(courseAccept.createdAt);
      setUpdatedAt(courseAccept.updatedAt);
      setCreatorCourse(courseAccept.creator);
      setCategoryId(courseAccept.categoryID);
      setInfosCourse(courseAccept);
    }
  }, [courseAccept]);

  const registerToCourse = () => {

    if(Boolean(context.infoUser.length)){

      Swal.fire({
        title: "از ثبت نام در دوره مطمعن هستید ؟",
        icon: "question",
        position : 'center',
        iconHtml: "؟",
        confirmButtonText: "بله",
        cancelButtonText: "خیر",
        showCancelButton: true,
        showCloseButton: true
      }).then(res => {
  
        if(res.value){
  
          
          if(!courseAccept.price){
            
            dispatch(
              registerToCourse(courseAccept._id , courseAccept.price)
            )
            
          }else{
            // درگاه پرداخت
          }
          
  
        }
        
      })

    }else{
      Swal.fire({
        title: 'قبل از خرید دوره باید در دانش یا ثبت نام کنید :)' ,
        
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
  

  }
  

  if (!loadingCourseAcc) {
    return <p>Loading...</p>;
  }

  if (!courseAccept) {
    return <p>Error: Course data not available.</p>;
  }

  return (
    <>
    {
      <div className='w-full'>

      <div className='flex justify-around h-72'>
        <div className='w-1/2 flex flex-col justify-around'>
          <div>
            <h1 className='font-DanaBold text-3xl'>{infosCourse?.name}</h1>
            <p className='w-10/12 my-2 text-gray-500 line-clamp-3'>
              {infosCourse?.description}
            </p>
          </div>
          <BreadCrumb category={categoryId?.title} name={infosCourse?.name}/>
        </div> 
        <div className='w-1/2'>
          <img src={`http://localhost:4000/courses/covers/${infosCourse?.cover}`} alt="" className='w-full h-full'/>
        </div>
      </div>

      <div className='mt-10 m-auto flex flex-col'>

        <div className='
        flex flex-wrap gap-5
        '>
          <div className='children:border-b-2 children:border-primary children:flex children:justify-between children:mb-2'>
            <CourseDetailBox
             title={'وضعیت دوره'}
            value={infosCourse?.isComplete == 1 ? 'تکمیل شده' : 'در حال برگذاری'}/>

            <CourseDetailBox
              title={'روش پشتیبانی '}
              value={infosCourse?.support}
            />
          </div>

          <div className='children:border-b-2 children:border-primary children:flex children:justify-between children:mb-2'>

          <CourseDetailBox
            title={'اخرین آپدیت'}
            value={updatedAt}/>

          <CourseDetailBox
            title={'تاریخ شروع دوره'}
            value={createdAt}/>
          </div>




        </div>
        <div className='flex mt-5'>
          
          <div className='w-3/4 p-3 border-2 border-primaryHover rounded-md'>
              <div className='flex gap-x-2'>
                <div className='flex flex-col gap-y-2'>
                  <div>
                    <span>مدرس : </span>
                    <span className='font-DanaBold'>
                      {creatorCourse?.name}
                    </span>
                  </div>

                  <span className='text-sm'>
                    {creatorCourse?.email}
                  </span>
                </div>
              </div>

          </div>

          <div className='w-1/4 p-5 flex justify-center items-center '>
            <button className='w-full h-full flex justify-center items-center bg-primary text-white text-xl font-DanaBold'
            onClick={()=>registerToCourse()}>
              {
                infosCourse?.isUserRegisteredToThisCourse ? 'ثبت نام کرده اید ' :
                'ثبت نام'
              }
            </button>
          </div>
        </div>

      </div>

      <div className='m-auto flex justify-center my-5 p-5 border-2 rounded-md w-11/12'>
        <div className='leading-8'>
          
          {infosCourse?.description}

        </div>
        
      </div>

      <div className='my-5 border-2 p-5'>
        <div className='mb-3'>
          <h2 className='text-xl font-DanaBold'>سرفصل ها</h2>
        </div>
        <AccordionCourse sessions={sessions}/>
      </div>

      <div>
        <CommentSend/>
      </div>

      <div className='border-2 mt-10 p-4'>
        <div className='flex gap-2 border-b-2 border-primaryHover pb-3'>
          <div>
            <FaRegMessage size={25} className='text-primary'/>
          </div>
          <h4 className='text-2xl font-DanaBold'>نظرات </h4>
        </div>
        <div className='mt-10 flex flex-col gap-y-5'>
            {
              comments && comments.length > 0 ?
              comments.map((comment)=>(
                  <CommentUserCourse key={comment._id} 
                  name={comment.creator.name} 
                  role={comment.creator.role} 
                  body={comment.body}/>
              ))
              :
              <p className='text-2xl font-DanaBold'>نظری ثبت نشده</p>
              
            }
        </div>
      </div>






      </div>


    }
    </>
  )
}
