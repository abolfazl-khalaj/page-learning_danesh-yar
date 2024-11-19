import React from 'react'
import { BiUser } from 'react-icons/bi'
import { Link } from 'react-router-dom'


export default function Course(props) {

    
  return (
    <div className='w-[23%] border-2 rounded-lg '>
        <Link to={`/course-info/${props.shortName}`} className='relative pb-1'>
            <img 
            src={`http://localhost:4000/courses/covers/${props.cover}`}
            alt={props.name}
            className='w-full rounded-lg h-40' />
            {
                props.discount > 0 &&
                <span className='absolute top-3 right-3 bg-primary text-white rounded-lg text-xs p-2 font-DanaBold'>
                    {props.discount}%
                </span>
            }

        </Link>

        <div className='px-2 pt-2'>

            <div className='pb-1 border-b-2'>
                <h5 className='text-base font-DanaMedium line-clamp-1'>
                    {props.name}
                </h5>
                <p className='text-xs mt-1 h-8'>
                    {props.description}
                </p>
                <span className='text-xs'>
                    {props.creator}
                </span>
            </div>
            <div className=' flex justify-between items-end py-2'>
                <div className='flex gap-1 '>
                    <BiUser/>

                    {props.registers}
                </div>
                <div className='flex gap-x-2'>
                    {/** disCount */}
                    {
                        props.discount > 0 && props.price !== 0 ?
                        <>
                        <span className='text-xs text-red-400 line-through'>
                            {props.price.toLocaleString()}
                        </span>
                        <span className='font-DanaMedium'>
                            {
                              (props.price - (props.price * props.discount) / 100).toLocaleString()
                            }
                        </span>
                    </>
                        :
                        <span className='font-DanaMedium'>
                            {
                                props.price == 0 ? 
                                'رایگان' 
                                : 
                                props.price?.toLocaleString()
                            }
                        </span>

                    }
                </div>
            </div>

        </div>
    </div>
  )
}
