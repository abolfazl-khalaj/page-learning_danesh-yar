import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUsersFromServer, getUsersFromServer, registerUsersFromServer } from '../../../redux/store/Users'
import User from '../components/User'
import ErrorBox from '../components/ErrorBox'
import Swal from 'sweetalert2'

export default function Users() {

  const [trigger , setTrigger] = useState(0)

  const dispatch = useDispatch()
  const users = useSelector(state => state.users)
  console.log(users);
  

  const infoLoginUser = []
  const giveAmountInfoUser = event => {
    const key = event.target.dataset.value
    const value = event.target.value

    infoLoginUser[key] = value
  }



  const clickLoginUser = () => {

    Swal.fire({
      title: "از ثبت کاربر مطمعن هستید ؟",
      icon: "question",
      position : 'center',
      iconHtml: "؟",
      confirmButtonText: "بله",
      cancelButtonText: "خیر",
      showCancelButton: true,
      showCloseButton: true
    })
    .then(res => {

      if(res.value) {

        infoLoginUser.confirmPassword = infoLoginUser.password
        
        dispatch(
          registerUsersFromServer(infoLoginUser)
        )
        
      }

    })
  }

 

  useEffect(()=> {


    dispatch(
      getUsersFromServer()
    )


  },[trigger])

  const deleteUserHandler = (userId) => {
    Swal.fire({
      title: "از حذف کاربر مطمعن هستید ؟",
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
          deleteUsersFromServer(userId)
        )
        setTrigger(prev => prev + 1)
      }

    })
    
  }



  return (
    <div className=''>
      <h2 className='mr-5 font-DanaBold text-2xl'>
        ثبت کاربر
      </h2>

      <div className='flex flex-wrap mt-10 
      children:w-1/2 gap-y-10 children:flex children:items-center 
      children:pr-6 '>

        <div>
          <input type="text" 
          placeholder=' نام و نام خانوادگی کابر..'
          className='border-b-2 outline-none' 
          data-value='name'
          onBlur={event => giveAmountInfoUser(event)}/>
        </div>

        <div>

          <input type="text" 
          placeholder=' نام کاربری..' 
          className='border-b-2 outline-none'
          data-value='username'
          onBlur={event => giveAmountInfoUser(event)}/>
        </div>

        <div>
          <input type="email" 
          placeholder=' ایمیل..'
          className='border-b-2 outline-none' 
          data-value='email'
          onBlur={event => giveAmountInfoUser(event)}/>
        </div>


        <div>
          <input type="text" 
          placeholder=' رمز عبور..'
          className='border-b-2 outline-none' 
          data-value='password'
          onBlur={event => giveAmountInfoUser(event)}/>
        </div>
        <div>
          <input type="text" 
          placeholder=' رمز عبور مجدد..'
          className='border-b-2 outline-none' 
          data-value='confirmPassword'
          onBlur={event => giveAmountInfoUser(event)}/>
        </div>

        <div>
          <input type="number" 
          placeholder='  شماره تلفن ..'
          className='border-b-2 outline-none' 
          data-value='phone'
          onBlur={event => giveAmountInfoUser(event)}/>
        </div>


        <div>
          <button className='w-52 h-10 bg-primary absolute left-12 text-white rounded-lg'
          onClick={()=> clickLoginUser()}>
            ثبت 
          </button>
        </div>

      </div>


      <div className='w-full my-10 border-t-2 border-primary'>
        <table className='w-[80%] mx-auto text-center mt-6'>
          
        <tr className='border-b-2 border-primary'>
          <th>
            نام و نام خانوادگی
          </th>
          <th>
            نام کاربری
          </th>
          <th>
            ایمیل
          </th>
          <th>
            شماره
          </th>

        </tr>

        <tbody>

          {
            users ?

              users.map(user => (
                <User key={user._id} {...user} removeUser={deleteUserHandler}/>
              ))

            :
            <ErrorBox message={'کاربری ثبت نشده ..'}/>
          }
          
        </tbody>



        </table>
      </div>



    </div>
  )
}
