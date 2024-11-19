import React, { useContext, useEffect, useState } from 'react'
import FilteredProduct from '../../../components/FilteredProducts'
import ContextApi from '../../../context/ContextApi'

export default function SendTicket() {

  const context = useContext(ContextApi)

  const [listDepartment , setListDepartment] = useState([])
  const [listSubDepartment ,setListSubDepartment] = useState([])

  const [titleTicket , setTitleTicket] = useState('')
  const [descriptionTicket , setDescriptionTicket] = useState('')
  const [idDepartment , setIdDepartment] = useState()
  const [idSubDepartment , setIdSubDepartment] = useState()
  const [idPriority , setIdPriority] = useState()

  

  useEffect(()=> {
    fetch('http://localhost:4000/v1/tickets/departments')
      .then(res => res.json())
      .then(result => setListDepartment(result))
  },[])

  const selectedDepartment = (departmentId) => {
   
    setIdDepartment(departmentId)

    fetch(`http://localhost:4000/v1/tickets/departments-subs/${departmentId}`)
      .then(res => res.json())
      .then(result => setListSubDepartment(result))
  }

  const selectedSubDepartment = (subDepartmentId)=> {
   
    setIdSubDepartment(subDepartmentId)

  }

  const selectedPriorityTicket = (priorityId)=> {

    setIdPriority(priorityId)

  }
  const priorityTicket = [
    {_id : 1 , title : 'بسیار بالا' , value : 4},
    {_id : 2 , title : ' بالا' , value : 3},
    {_id : 3 , title : 'معمولی' , value : 2},
    {_id : 4 , title : 'بسیار ساده' , value : 1}
  ]

  const sendNewTicket = ()=> {


    const infosTicket = {
      departmentID : idDepartment ,
      departmentSubID : idSubDepartment ,
      title : titleTicket ,
      body : descriptionTicket ,
      priority : idPriority
    }

    fetch('http://localhost:4000/v1/tickets',{
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json',
        Authorization : `Bearer ${context.token}`
      },
      body : JSON.stringify(infosTicket)
    })
      .then(res => console.log(res)
      )

  }


  return (
    <div className='my-5'>

        <div className='flex flex-col gap-y-2'>

            <div>
                <input type="text" placeholder='عنوان تیکت ..' 
                className='border-2 border-primaryHover outline-primary p-2 text-sm w-1/2'
                onBlur={(e)=>setTitleTicket(e.target.value)}/>
            </div>
            <div>
                <textarea className='w-full h-52 p-3 border-2 border-primaryHover outline-primary' placeholder='پیام خود را بنویسید ..'
                onBlur={(e)=>setDescriptionTicket(e.target.value)}
                ></textarea>
            </div>
            <div className='flex gap-x-10'>

              <div >
                <FilteredProduct title={'دپارتمان تیکت خود را انتخاب کنید'} options={listDepartment} funcFiltered={selectedDepartment}/>
              </div>

              <div>
              <FilteredProduct title={'زیر مجموعه دپارتمتن را مشخص کنید'} options={listSubDepartment} funcFiltered={selectedSubDepartment}/>
              </div>

              <div>
              <FilteredProduct title={'اولویت تیکت را مشخص کنید'} options={priorityTicket} funcFiltered={selectedPriorityTicket}/>
              </div>

            </div>



            <div className='w-full flex justify-end'>
              <button className='py-2 px-7 rounded-md bg-primary text-white font-DanaMedium '
              onClick={sendNewTicket}>ارسال</button>
            </div>
        </div>
      
    </div>
  )
}
