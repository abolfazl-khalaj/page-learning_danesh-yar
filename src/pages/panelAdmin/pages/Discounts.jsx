import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCoursesFromServer } from '../../../redux/store/Courses';
import { info } from 'autoprefixer';
import { offAllCourses, offOneCourse } from '../../../redux/store/Off';

export default function Discounts() {

  const [idCourseOff , setIdCourseOff] = useState(0)
  const {offs , loadingOffs} = useSelector(state => state.offs)

  console.log(offs);
  
  
  

  const dispatch = useDispatch()
  const {courses , loadingCourses} = useSelector(state => state.courses)

  
  useEffect(()=> {

    dispatch(
      getCoursesFromServer()
    )

  },[])





  let infoOff = []

  const giveAmountInfoCreteOff = (event) => {
    const key = event.target.dataset.value 
    const value = event.target.value 

    infoOff[key] = value

  }




  const clickCreateOff = () => {

    if(idCourseOff === '-1'){

      dispatch(
        offAllCourses(infoOff.percent)
      )
      
    }else {
      
      infoOff.course = idCourseOff

      dispatch(
        offOneCourse(infoOff)
      )
      
    }


  }


  return (
    <div>
      <h2 className='mr-5 font-DanaBold text-2xl'>
        برگذاری تخفیفات
      </h2>

      <div className='flex flex-wrap mt-10 
      children:w-1/2 gap-y-10 children:flex children:items-center 
      children:pr-6 '>

        <div>
          <input type="text" 
          placeholder=' کد تخفیف..'
          className='border-b-2 outline-none'
          data-value='code'
          onBlur={(event)=>giveAmountInfoCreteOff(event)} />
        </div>

        <div>
          <input type="number" 
          placeholder=' حدااکثر تخیف..'
          className='border-b-2 outline-none'
          data-value='max'
          onBlur={(event)=>giveAmountInfoCreteOff(event)}  />
        </div>

        <div>
          <input type="number"
          max={100} 
          placeholder=' درصد تخفیف..'
          className='border-b-2 outline-none'
          data-value='percent'
          onChange={(event)=>giveAmountInfoCreteOff(event)}  />
        </div>

        
        <div>
          <select className='border-b-2 outline-none w-1/3'
          onChange={(e)=>setIdCourseOff(e.target.value)}>

            <option value=""> انتخاب دوره </option>
            <option value="-1">همه دوره ها</option>

            {
              courses?.map(course => (
                <option value={course._id}>{course.name}</option>

              ))
            }

          </select>
        </div>

        <div>
          <button className='w-52 h-10 bg-primary absolute left-12 text-white rounded-lg'
          onClick={()=>clickCreateOff()}>
            ثبت تخفیف
          </button>
        </div>

      </div>


      <div className='w-full my-10 border-t-2 border-primary'>

          <div className='mt-10'>
              <h3 className='mr-5 font-DanaMedium text-xl'>تخفیفات</h3>
          <table className='w-[80%] mx-auto text-center mt-6'>
          
          <tr className='border-b-2 border-primary'>
            <th>
              عنوان منو
            </th>
            <th>
              لینک منو 
            </th>
          </tr>
          <tbody>





          </tbody>
  

      
          </table>
          </div>

      </div>



    </div>
  )
}
