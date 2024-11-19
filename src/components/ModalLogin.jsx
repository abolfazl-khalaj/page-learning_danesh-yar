import React, { useContext, useState } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import Input from './Input'
import ContextApi from '../context/ContextApi'

export default function ModalLogin({closeModal}) {

  const [statusPresence , setStatusPresence] = useState('register')
  const context = useContext(ContextApi)

  window.addEventListener('click', e => {
    if(e.target.id == 'close-modal'){
      closeModal()
    }
    
  })

  const clickLoginHandler = ()=> {


    const infos = {
      identifier : context.infosUserInPresence.email.value ,
      password : context.infosUserInPresence.password.value ,
    }
    try{

      fetch(`http://localhost:4000/v1/auth/login`,{
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(infos)
      }).then(res => {
        console.log(res);
        if(res.ok){
          closeModal()
        }
        return res.json()
        
      }).then(result => console.log(result)
      )
      
    }catch{
      console.log('eror form login');
      
    }
    
    
  }

  const clickRegisterHandler = ()=> {


      const infos = {
        username : context.infosUserInPresence.username.value ,
        email : context.infosUserInPresence.email.value ,
        password : context.infosUserInPresence.password.value ,
        confirmPassword : context.infosUserInPresence.password.value,
        name : context.infosUserInPresence.name.value ,
        phone : context.infosUserInPresence.phone.value,
      }
      try {
        fetch(`http://localhost:4000/v1/auth/register`,{
          method : 'POST',
          headers : {
            'Content-Type' : 'application/json'
          },
          body : JSON.stringify(infos)
        }).then(res => {
          
          if(res.status == 400){
            console.log('not valid infos');
            console.log(res);
            
            
          }
          if(res.status == 409){
            console.log('emil reply');
            
          }
          if (res.ok){
            
            console.log(res);
            
          }

          return res.json()
  
        })
        .then(data => {
          console.log(data);
          
          context.login(data.user ,data.accessToken)
        })

      }catch{
        console.log('eror tray cathc');
        
      }






    
    
  }

  

  return (
    <div id='close-modal' className='fixed inset-0 z-50 w-screen h-screen backdrop-blur flex justify-center items-center '>
      <div className='w-1/5 bg-primaryHover p-6'>
        <button onClick={()=> closeModal()}>
          <IoIosCloseCircleOutline size={25} />
        </button>
        
        <div className='flex justify-center border-b pb-3 mb-3'>
          <h2 className='font-DanaBold text-xl'>
            دانش یار
          </h2>
        </div>

        {
          statusPresence == 'register' ?
          <div className=''>
            <div className='flex flex-col gap-y-4 my-3'>


              <Input 
                  type='text' 
                  placeholder={'نام کاربری ..'}
                  role={'username'}
                  />

              <Input 
                type='password' 
                placeholder={'رمز عبور  ..'}
                role={'password'}/>

              <Input 
                type='text' 
                placeholder={'نام خود را وارد کنید ..'} 
                role={'name'}
                validator={/^[a-z1-9]{5,90}$/g}
                />

              <Input  
                type='email' 
                placeholder={'آدرس ایمیل ..'}
                role={'email'}
                validator={/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/g}
                />

              <Input
                type='number' 
                placeholder={' شماره تلقن..'}
                role={'phone'}
                validator={/^[09][0-9]{10}$/g}
                />

            </div>
            <div className='text-sm'>
              <span>
                از قبل حساب دارید ؟  
              </span>
              <button className='text-blue-600 bg-blue-950 mr-2 px-1'
              onClick={()=>setStatusPresence('login')}>
                بله  :)
              </button>
            </div>
            <div className='flex justify-end mt-3'>
              <button className='py-1 px-2 font-DanaMedium border-2'
              onClick={clickRegisterHandler}>
                ثبت نام
              </button>
            </div>
          </div>
          :
          <div className=''>
            <div className='flex flex-col gap-y-4 my-3'>

              <Input 
                type='text' placeholder={'ایمیل خود را وارد کنید...'} role={'email'}/>

              <Input 
                type='password' placeholder={'رمز عبور ..'} role={'password'}/>
                
            </div>
            <div className='text-sm'>
              <span>
                میخواهید حساب جدید ثبت کنید ؟  
              </span>
              <button className='text-blue-600 bg-blue-950 mr-2 px-1'
              onClick={()=>setStatusPresence('register')}>
                بله  :)
              </button>
            </div>
            <div className='flex justify-end mt-3'>
              <button className='py-1 px-2 font-DanaMedium border-2'
              onClick={clickLoginHandler}>
                ورود
              </button>
            </div>
          </div>

        }




      </div>
    </div>
  )
}
