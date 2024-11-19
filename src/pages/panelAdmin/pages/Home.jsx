import React, { useContext, useEffect } from 'react'
import ErrorBox from '../components/ErrorBox'
import ObedienceBox from '../components/ObedienceBox'
import { FiUsers } from 'react-icons/fi'
import { GoFile, GoFileDirectory } from 'react-icons/go'
import { MdOutlineArticle } from 'react-icons/md'
import Chart from '../components/Chart'
import Supporters from '../components/Supporters'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersFromServer } from '../../../redux/store/Users'
import { getCoursesFromServer } from '../../../redux/store/Courses'
import { getArticlesFromServer } from '../../../redux/store/Articles'
import { getSessionsFromServer } from '../../../redux/store/Sessions'

export default function Home() {


  const dispatch = useDispatch()
  const users = useSelector(state => state.users)
  const {courses , loadingCourses} = useSelector(state => state.courses)
  const {articles , loadingArticles} = useSelector(state => state.articles)
  const {sessions , loadingSessions} = useSelector(state => state.sessions)
  

  useEffect(()=> {

    dispatch(
      getUsersFromServer()
    )
    dispatch(
      getCoursesFromServer()
    )
    dispatch(
      getArticlesFromServer()
    )
    dispatch(
      getSessionsFromServer()
    )

  },[])


  return (
    <div className='px-8'>
      
      <div className='flex justify-around '>

        <ObedienceBox value={`${users.length} کاربر`} Icon={<FiUsers size={25}/>}/>
        <ObedienceBox value={`${courses.length} دوره`} Icon={<GoFileDirectory size={25}/>}/>
        <ObedienceBox value={`${articles.length} مقاله`} Icon={<MdOutlineArticle size={25}/>
}/>
        <ObedienceBox value={`${sessions.length} جلسه`} Icon={<GoFile size={25}/>}/>

      </div>

      <div className='mt-8 w-full'>
        <Chart/>
      </div>

      <div className='mt-8'>
        <Supporters users={users}/>
      </div>


      
    </div>
  )
}
