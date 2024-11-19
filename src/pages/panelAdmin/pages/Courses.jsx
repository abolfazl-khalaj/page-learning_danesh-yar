import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineDollar } from 'react-icons/ai'
import { FiLayers } from 'react-icons/fi'
import Course from '../components/Course'
import { MdOutlineInsertPhoto, MdOutlineSupportAgent } from 'react-icons/md'
import { BsLink45Deg } from 'react-icons/bs'
import ErrorBox from '../components/ErrorBox'
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux'
import { createCoursesFromServer, deleteCoursesFromServer, getCoursesFromServer } from '../../../redux/store/Courses'
import { getCoursesCategoryFromServer } from '../../../redux/store/CoursesCategory'
import {getCategoryFromServer} from '../../../redux/store/Categories'
import CkEditor from '../components/ckEditor/CkEditor'
 

export default function Courses() {

  const [trigger , setTrigger] = useState(0)


  const infoNewCourses = {}


  const dispatch = useDispatch()
  const {courses , loadingCourse} = useSelector(state => state.courses)
  const {categories, loadingCategories} = useSelector(state => state.categories)
  console.log(categories);
  


  console.log(infoNewCourses);
  
  

  useEffect(()=> {

    dispatch(
      getCoursesFromServer()
    )

    dispatch(
      getCategoryFromServer()
    )


  },[trigger])


  const removeCourseHandler = (courseId) => {

    Swal.fire({
      title: "از حذف دوره مطمعن هستید ؟",
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
        console.log(res);
        setTrigger(prev => prev + 1)
        
        dispatch(
          deleteCoursesFromServer(courseId)
        )

      }

      
    })
  }

  const changeCategoryCourses = (event) => {

    infoNewCourses.categoryID = event.target.value
    
  }

  const changeCoverCourse = (event) => {

    infoNewCourses.cover = event.target.files[0]

  }

  const changeTextAreaHandler = (value) => {
    
    infoNewCourses.description = value
    
  }

  const giveAmountInfoCreateCourse = (event) => {
    const key = event.target.dataset.value 
    const value = event.target.value

    infoNewCourses[key] = value    
  }

  const clickLoginCourse = () => {

    Swal.fire({
      title: "از ساخت دوره مطمعن هستید ؟",
      icon: "question",
      position : 'center',
      iconHtml: "؟",
      confirmButtonText: "بله",
      cancelButtonText: "خیر",
      showCancelButton: true,
      showCloseButton: true
    }).then(res => {
      if(res.value){
        
        dispatch(
          createCoursesFromServer(infoNewCourses)
        )
        
      }
    })
    
  }
  

  return (
    <div className=''>
      <h2 className='mr-5 font-DanaBold text-2xl'>
        اضافه دوره جدید
      </h2>

      <div className='flex relative flex-wrap mt-10 
      children:w-1/2 gap-y-10 children:flex children:items-center 
      children:pr-6 '>

        <div>
          <FiLayers size={20}/>
          <input type="text" 
          placeholder=' نام دوره ..'
          className='border-b-2 outline-none' 
          data-value='name'
          onChange={()=>giveAmountInfoCreateCourse(event)}/>
        </div>

        <div>
           <BsLink45Deg size={20}/>

          <input type="text" 
          placeholder=' URL دوره ..' 
          className='border-b-2 outline-none'
          data-value='shortName'
          onChange={()=>giveAmountInfoCreateCourse(event)}/>
        </div>


        <div>
          <AiOutlineDollar size={20}/>
          <input type="number" 
          placeholder=' قیمت دوره ..'
          className='border-b-2 outline-none'
          data-value='price' 
          onChange={()=>giveAmountInfoCreateCourse(event)}/>
        </div>

        <div>
          <MdOutlineInsertPhoto size={20}/>
          <input type="file" 
          className='border-b-2 outline-none'
          onChange={(event => changeCoverCourse(event))}/>
        </div>

        <div>
          <select placeholder=' ..' className='border-b-2 outline-none w-1/3'
          onChange={()=>changeCategoryCourses(event)}>

          <option value="-1"> انتخاب دسته بندی </option>

            {
              categories.map(category => (

                <option key={category._id} value={category._id}>
                   {category.title}
                </option>

              ))
            }


          </select>
        </div>

        <div className='flex items-start flex-col gap-y-1'>
          <h4 className='font-DanaMedium'>وضعیت دوره </h4>
          <div>
            <div className='flex gap-1'>
              <span className='text-sm text-gray-400'>start</span>
              <input type="checkbox" name="status"
              data-value='status'
              value='start'
              onChange={(event)=>giveAmountInfoCreateCourse(event)}/>
            </div>
            <div className='flex gap-1'>
              <span className='text-sm text-gray-400'>پیش فروش</span>
              <input type="checkbox" name="status"
              data-value='status'
              value='preSale'
              onChange={(event)=>giveAmountInfoCreateCourse(event)}/>
            </div>
          </div>
        </div>

        <div className='mb-20'>

            <CkEditor changeTextArea={changeTextAreaHandler}/>

        </div>



        <div className='absolute bottom-2 left-1'>
          <button className='w-52 h-10 bg-primary absolute left-12 text-white rounded-lg'
          onClick={()=>clickLoginCourse()}>
            ثبت دوره
          </button>
        </div>

      </div>


      <div className='w-full my-10 border-t-2 border-primary'>
        <table className='w-[80%] mx-auto text-center mt-6'>
          
        <tr className='border-b-2 border-primary'>
          <th>
            عکس
          </th>
          <th>
            نام
          </th>
          <th>
            قیمت
          </th>
          <th>
            تعداد کاربر
          </th>
          <th>
            مدرس
          </th>
          <th>
            دسته بندی
          </th>
          <th>
            وضعیت
          </th>

        </tr>

        {
          courses ? (
            courses.map(course => (
              <Course key={course._id} {...course} removeCourse={removeCourseHandler}/>
            ))
          )
          :
          <ErrorBox message={'شما دوره ای منتشر نکردید'}/>
        }


        </table>
      </div>



    </div>
  )
}
