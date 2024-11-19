import React from 'react'
import { BiCaretDown } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export default function LinkMenu({id ,link , title ,subMenus}) {

  
  
  return (
    <li>
      <Link to={`/category-courses/${link}`} className='relative flex items-center gap-2 group'>
        {title}
        {subMenus.length !== 0 && <BiCaretDown/> }
        
        

        {
          subMenus.length !== 0 && 
          <ul className='absolute w-64 top-14 right-4 rounded-md flex flex-col 
          gap-y-3 bg-primary py-2 px-3 opacity-0 z-10 invisible group-hover:opacity-100 group-hover:visible delay-150 transition-all'>
            {
              subMenus.map((subMenu)=>{
                return (
                  <li key={subMenu._id} className='border-b-2 
                  border-primary hover:border-blue-300 delay-75 text-sm'>
                    <Link to={`course-info/${subMenu.href}`}>
                      {subMenu.title}
                    </Link>

                  </li>

                )
              })
            }
          </ul>
        }

        

      </Link>
    </li>

  )
}
