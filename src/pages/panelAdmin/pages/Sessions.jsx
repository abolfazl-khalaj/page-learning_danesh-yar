import React, { useContext, useEffect, useState } from 'react'
import { FiLayers } from 'react-icons/fi'
import { MdOutlineInsertPhoto } from 'react-icons/md'
import { BsLink45Deg } from 'react-icons/bs'
import Meeting from '../components/Meeting'
import ErrorBox from '../components/ErrorBox'
import ContextApi from '../../../context/ContextApi'
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux'
import { createSessionsFromServer, deleteSessionsFromServer, getSessionsFromServer } from '../../../redux/store/Sessions'
import { getCoursesFromServer} from '../../../redux/store/Courses'


export default function Sessions() {


  const [trigger , setTrigger] = useState(0)


  const dispatch = useDispatch()
  const {sessions , loadingSessions} = useSelector(state => state.sessions)
  const {courses , loadingCourses} = useSelector(state => state.courses)


  let courseSessionId = 0
  const changeCourseSession = (event) => {
    courseSessionId = event.target.value
    
  }



  const infoNewSession = []
  const giveAmountInfoCreateSession = (event) => {

    const key = event.target.dataset.value
    const value = event.target.value

    infoNewSession[key] = value

  }

  const changeVideoSession = (event) => {
    infoNewSession.video = event.target.files[0]
  }
  
  useEffect(() => {

    dispatch(
      getSessionsFromServer()
    )
    dispatch(
      getCoursesFromServer()
    )


  },[trigger])

  const removeMeetingHandler = (meetingId) => {
    console.log(meetingId);

    Swal.fire({
      title: "از حذف جلسه مطمعن هستید ؟",
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
          deleteSessionsFromServer(meetingId)
        )
        setTrigger(prev => prev + 1)
      }

    })
  }

  const clickLoginSession = () => {

    Swal.fire({
      title: "از افذودن جلسه مطمعن هستید ؟",
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
          createSessionsFromServer(courseSessionId , infoNewSession)
        )
        
      }

    })

  }

  


  return (
    <div className=''>
      <h2 className='mr-5 font-DanaBold text-2xl'>
        اضافه جلسه جدید
      </h2>

      <div className='flex flex-wrap mt-10 
      children:w-1/2 gap-y-10 children:flex children:items-center 
      children:pr-6 '>

        <div>
          <FiLayers size={20}/>
          <input type="text" 
          placeholder=' موضوع جلسه ..'
          className='border-b-2 outline-none' 
          data-value='title'
          onBlur={()=>giveAmountInfoCreateSession(event)}/>
        </div>

        <div>
           <BsLink45Deg size={20}/>

          <input type="text" 
          placeholder=' تایم جلسه..' 
          className='border-b-2 outline-none'
          data-value='time'
          onBlur={()=>giveAmountInfoCreateSession(event)}/>
        </div>

        <div>
          <MdOutlineInsertPhoto size={20}/>
          <input type="file" 
          className='border-b-2 outline-none'
          onChange={(event)=>changeVideoSession(event)}/>
        </div>

        <div>
          <select placeholder=' ..' className='border-b-2 outline-none 
          '
          onChange={()=>changeCourseSession(event)}>

          <option value="-1"> دوره مرتبط به این جلسه</option>
          {
              courses?.map(course => (

                <option key={course._id} value={course._id}> {course.name} </option>

              ))
            }

          </select>
        </div>

        <div className='flex items-start flex-col gap-y-1'>
          <h4 className='font-DanaMedium'>هزینه دوره </h4>
          <div>
            <div className='flex gap-1'>
              <span className='text-sm text-gray-400'>رایگان</span>
              <input type="checkbox" name="status"
              data-value='free'
              value='0'
              onChange={(event)=>giveAmountInfoCreateSession(event)}/>
            </div>
            <div className='flex gap-1'>
              <span className='text-sm text-gray-400'> غیر رایگان</span>
              <input type="checkbox" name="status"
              data-value='free'
              value='1'
              onChange={(event)=>giveAmountInfoCreateSession(event)}/>
            </div>
          </div>
        </div>


        <div>
          <button className='w-52 h-10 bg-primary absolute left-12 text-white rounded-lg'
          onClick={()=>clickLoginSession()}>
            ثبت جلسه
          </button>
        </div>

      </div>


      <div className='w-full my-10 border-t-2 border-primary'>
        <table className='w-[80%] mx-auto text-center mt-6'>
          <thead>
            <tr className='border-b-2 border-primary'>

                <th>
                    عنوان جلسه
                </th>
                <th>
                    تایم
                </th>
                <th>
                    دسته بندی
                </th>
                   
            </tr>
          </thead>

          <tbody>

            {
              sessions ? 
              (
                sessions.map(meeting => (
                  <Meeting key={meeting._id} 
                  {...meeting} 
                  removeMeeting={removeMeetingHandler}
                  />
                ))
              )
              :
              <ErrorBox message={'جلسه ای انتشار نکردید'}/>
            }


          </tbody>



        </table>
      </div>



    </div>
  )
}
