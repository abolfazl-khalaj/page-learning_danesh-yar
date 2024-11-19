import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { LuPenLine } from 'react-icons/lu'
import { FiCalendar } from 'react-icons/fi'
import { Link } from 'react-router-dom';

export default function Article(props) {


    

  return (
    <div className='w-1/5 border-2 flex flex-col gap-4 p-2'>
        <div>
            <img
             src={`http://localhost:4000/courses/covers/${props.cover}`}
             alt={props.title}
             className='w-full h-56' />
        </div>
        
        <div className='flex flex-col gap-3'>
            <Link to={`/article-info/${props.shortName}`} className='font-DanaMedium line-clamp-1'>
                {props.title}
            </Link>
            <p className='text-xs h-16 text-gray-500 line-clamp-5'>
                {props.description}
            </p>
        </div>
        
        <div>
            <div className='text-sm flex justify-between'>
                <span className='flex'>
                <LuPenLine />
                    {
                        props.creator.name
                    }
                </span>

                <span className='flex'>
                    {
                        props.createdAt.slice(0 ,10)
                    }
                <FiCalendar />
                </span>
            </div>

            <Link to={`/article-info/${props.shortName}`} className='flex items-center justify-center gap-2 bg-primary text-white rounded-sm py-1'>
                <span>
                    مقاله
                </span>
                <BiArrowBack />
            </Link>
        </div>

    </div>
  )
}
