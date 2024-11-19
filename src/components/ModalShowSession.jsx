import React from 'react'
import { IoMdClose } from 'react-icons/io'


export default function ModalShowSession(props) {

    console.log(props);
    

  return (
    <div className='fixed inset-0 w-full h-full bg-gray-500 p-24 flex justify-between items-center flex-col gap-y-3'>
        <div className='w-full flex justify-between items-center'>

            <p className='text-xl font-DanaMedium text-white'>{props.title}</p>

            <button onClick={()=>props.closeModal()}
            className='p-2 text-2xl bg-primary text-white'>
                <IoMdClose />
            </button>
            
        </div>
        <div>
            <video className='w-[1250px] h-[500px] m-auto' controls >
                <source src={`http://localhost:4000/courses/covers/${props.video}`} type="video/mp4"/>
            </video>
        </div>
    </div>
  )
}
