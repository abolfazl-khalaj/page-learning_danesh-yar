import React, { useContext, useEffect, useState } from 'react'
import HeaderPanel from '../components/HeaderPanel'
import ContextApi from '../../../context/ContextApi'
import Course from '../../../components/Course';
import { useParams } from 'react-router-dom';

export default function CourseMe() {

  const context = useContext(ContextApi)
  const coursesMe = context.infoUser.courses

  
  
  

  return (
    <div>
      
      <HeaderPanel/>

      <div className='p-8 border-2'>

      {
        coursesMe && coursesMe.length ? (
          coursesMe?.map(course => (
            <Course key={course._id} {...course}/>
          ))
        )
 
        :
        <div className='p-4 bg-red-500 text-center'>
          <p className='text-white text-xl'>شما در دوره ای شرکت نکردید</p>
        </div>
      }

      </div>
    </div>
  )
}
