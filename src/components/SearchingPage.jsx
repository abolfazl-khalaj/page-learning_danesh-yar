import React, { useState } from 'react'
import { BiCloset, BiSearch } from 'react-icons/bi'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { Link } from 'react-router-dom'
import Course from './Course'
import ItemSearched from './ItemSearched'
import { useDispatch, useSelector } from 'react-redux'
import { getSearchingPageFromServer } from '../redux/store/SearchingPage'

export default function SearchingPage() {
  const [valueSearch , setValueSearch] = useState('')
  const [isShowModalSearching , setIsShowModalSearching] = useState(false)

  

  const dispatch = useDispatch()
  const {searching , loadingSearching} = useSelector(state => state.searchingPage)
  
  

  const changeSearching = (e)=> {
    
    if(e.target.value) {

        dispatch(
            getSearchingPageFromServer(e.target.value)
        )
    }


    setIsShowModalSearching(true)
  }


  return (
    <div className='flex relative items-center gap-2'>
    <div>
      
      <input className='py-2 pr-4 pl-9 w-56 text-xs rounded-md outline-none text-black' type="text" placeholder='سرچ کنید ..'
      
      onInput={(e)=>changeSearching(e)}/>
      <button className='absolute left-2 top-1 rounded-full cursor-pointer bg-blue-100 hover:bg-primaryHover text-primary hover:text-blue-600 p-1'>
        <BiSearch/>
      </button>
    </div>

    {
        isShowModalSearching &&
        (

        <div className='absolute top-[60px] w-72 right-4 text-sm rounded-md flex flex-col gap-y-3 bg-primary py-2 px-3  text-black '>
            <button onClick={()=>setIsShowModalSearching(false)} className='text-white'>
                <IoIosCloseCircleOutline size={20}/>
            </button>

            
            {
                searching.allResultCourses && searching.allResultCourses.length > 0 &&
                <ul className='flex flex-col gap-y-2'>
                    <li className='mb-2'>
                        <span className='font-DanaMedium'>دوره ها ..</span>
                    </li>
    
    
                    {
                        searching.allResultCourses?.map(course =>(
                            <ItemSearched 
                            key={course._id}
                            href={`/article-info/${course.shortName}`}
                            title={course.name}
                            description={course.description}/>
                        ))
                    }
          
          
                </ul>
                
                
            }


            {
                searching.allResultArticles && searching.allResultArticles.length > 0 &&
                <ul className='flex flex-col gap-y-2'>

                    <li className='mb-2'>
                        <span className='font-DanaMedium'>مقاله ها ..</span>
                    </li>


                {
                    searching.allResultArticles?.map(article =>(
                        <ItemSearched 
                        key={article._id}
                        href={`/article-info/${article.shortName}`}
                        title={article.title}
                        description={article.description}/>
                    ))
                }
      
                </ul>
                
                
            }

            {
                searching.allResultArticles &&
                searching.allResultCourses &&
                searching.allResultArticles.length === 0 && 
                searching.allResultCourses.length === 0 &&
                
                <p>دوره و مقاله در این موضوع وجود ندارد</p>
            }


          </div>

        )
    }

  </div>
  )
}
