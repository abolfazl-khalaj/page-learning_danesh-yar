import React, { memo, useContext, useEffect, useState } from 'react'

import Menu from '../components/Menu'
import ErrorBox from '../components/ErrorBox'
import ContextApi from '../../../context/ContextApi'
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux'
import { deleteMenusPanelFromServer, getMenusPanelFromServer } from '../../../redux/store/MenusPanel'
import { createMenusFromServer } from '../../../redux/store/Menus'

export default memo( function Menus() {


  const [trigger , setTrigger] = useState(0) 



  const infoCreateMenu = [] 
  const giveAmountInfoCreateMenu = (event) => {
    
    const key = event.target.dataset.value 
    const value = event.target.value 

    infoCreateMenu[key] = value

  }

  const clickCreateMenu = () => {

    Swal.fire({
      title: "از ساخت منو مطمعن هستید ؟",
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
          createMenusFromServer(infoCreateMenu)
        )
        
      }
    })

  }



  const dispatch = useDispatch()
  const {menusPanel , loadingMenusPanel} = useSelector(state => state.menusPanel)

    useEffect(()=> {

      dispatch(
        getMenusPanelFromServer()
      )


    },[trigger])




    function removeMenuHandler (idMenu){

      Swal.fire({
        title: "از حذف منو مطمعن هستید ؟",
        icon: "question",
        position : 'center',
        iconHtml: "؟",
        confirmButtonText: "بله",
        cancelButtonText: "خیر",
        showCancelButton: true,
        showCloseButton: true
      })
      .then(res => {
        console.log(res);
        if(res.value){

          dispatch(

            deleteMenusPanelFromServer(idMenu)

          )
          setTrigger(prev => prev + 1)
        }
        
      })
      
    }



    return (
      <div>
        <h2 className='mr-5 font-DanaBold text-2xl'>
          اضافه منو جدید
        </h2>
  
        <div className='flex flex-wrap mt-10 
        children:w-1/2 gap-y-10 children:flex children:items-center 
        children:pr-6 '>
  
          <div>
            <input type="text" 
            placeholder=' نام منو ..'
            className='border-b-2 outline-none'
            data-value='title'
            onBlur={(event)=>giveAmountInfoCreateMenu(event)} />
          </div>

          <div>
            <input type="text" 
            placeholder=' لینک منو ..'
            className='border-b-2 outline-none'
            data-value='href'
            onBlur={(event)=>giveAmountInfoCreateMenu(event)}  />
          </div>

          <div className='flex items-start flex-col gap-y-1'>
          <h4 className='font-DanaMedium'> مسیر منو </h4>
          <div>
            <div className='flex gap-1'>
              <span className='text-sm text-gray-400'>منو اصلی</span>
              <input type="checkbox" name="status" id="status" />
            </div>
            <div className='flex gap-1'>
              <span className='text-sm text-gray-400'>ساب منو</span>
              <input type="checkbox" name="status" id="status" />
            </div>
          </div>
        </div>
  
          <div>
            <select placeholder=' ..' className='border-b-2 outline-none w-1/3'>
  
              <option value=""> انتخاب دسته بندی </option>
              <option value="">فرانت اند </option>
              <option value="">فرانت اند </option>
              <option value="">فرانت اند </option>
              <option value="">فرانت اند </option>
  
            </select>
          </div>
  
          <div>
            <button className='w-52 h-10 bg-primary absolute left-12 text-white rounded-lg'
            onClick={()=>clickCreateMenu()}>
              ثبت منو
            </button>
          </div>
  
        </div>
  
  
        <div className='w-full my-10 border-t-2 border-primary'>

            <div className='mt-10'>
                <h3 className='mr-5 font-DanaMedium text-xl'>منو های اصلی </h3>
            <table className='w-[80%] mx-auto text-center mt-6'>
            
            <tr className='border-b-2 border-primary'>
              <th>
                عنوان منو
              </th>
              <th>
                لینک منو 
              </th>
            </tr>
            <tbody>


                {
                  menusPanel ? (
                    menusPanel.map(menu => {

                      if(!menu.parent){

                        return <Menu type={'menu'}
                        key={menu._id}
                        id={menu._id}
                        title={menu.title}
                        parent={menu.parent?.title} 
                        href={menu.href}
                        removeMenu={removeMenuHandler}/>

                      }

                    })
                  )
                  :
                  <ErrorBox message={'منو وجود ندارد'}/>
                }


            </tbody>
    

        
            </table>
            </div>

            <div className='mt-10'>
                <h3 className='mr-5 font-DanaMedium text-xl'>منو های فرزند "ساب منو"</h3>

                <table className='w-[80%] mx-auto text-center mt-6'>
            
            <tr className='border-b-2 border-primary'>
              <th>
                عنوان منو
              </th>
              <th>
                لینک منو 
              </th>
              <th>
                پرنت منو 
              </th>
            </tr>
            <tbody>

            {

              menusPanel ? (
                menusPanel.map(subMenu => {

                  if(subMenu.parent){

                    return <Menu type={'submenu'} 
                    key={subMenu._id} 
                    id={subMenu._id}
                    title={subMenu.title}
                    parent={subMenu.parent.title} 
                    href={subMenu.href}
                    removeMenu={removeMenuHandler}/>

                  }

                }

                ))
              
              :
              <ErrorBox message={'زیر منو وجود ندارد'}/>
            
            }

            </tbody>
    
            </table>
            </div>

        </div>
  
  
  
      </div>
    )
  })
