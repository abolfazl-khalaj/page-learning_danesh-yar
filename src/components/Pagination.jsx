import React from 'react'
import { BiArrowToLeft, BiArrowToRight } from 'react-icons/bi'

export default function Pagination() {
  return (
    <div>

        <ul className='flex gap-2 children:bg-primaryHover children:text-white children:w-5
        children:h-5
        children:flex
        children:items-center
        children:justify-center
        children:p-5
        children:rounded-md'>
            <li>
                <a href="">
                    <BiArrowToLeft/>
                </a>
            </li>

            <li>
                <a href="">
                    1
                </a>
            </li>

            <li>
                <a href="">
                    2
                </a>
            </li>

            <li>
                <a href="">
                    3
                </a>
            </li>

            <li>
                <a href="">
                    4
                </a>
            </li>

            <li>
                <a href="">
                    <BiArrowToRight/>
                </a>
            </li>

        </ul>
      
    </div>
  )
}
