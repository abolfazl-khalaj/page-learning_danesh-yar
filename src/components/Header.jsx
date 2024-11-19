import React, { useState ,useEffect, useContext ,memo, useRef} from 'react'
import { BiCloset, BiMessage, BiMoon, BiSearch, BiUser } from 'react-icons/bi'
import LinkMenu from './LinkMenu'
import { Link } from 'react-router-dom'
import LinkTopBar from './LinkTopBar'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import ModalLogin from './ModalLogin'
import ContextApi from '../context/ContextApi'
import SearchingPage from './SearchingPage'
import { FaRegMessage } from 'react-icons/fa6'
import ModalMessage from './ModalMessage'
import { useDispatch, useSelector } from 'react-redux'
import { getMenusFromServer } from '../redux/store/Menus'
import { getTopBarMenusFromServer } from '../redux/store/TopbarMenus'


function Header() {

  const [isShowModalLogin , setIsShowModalLogin] = useState(false)
  const [isShowModalMessage , setIsShowModalMessage] = useState(false)
  const context = useContext(ContextApi)
  
  const dispatch = useDispatch()
  const {menus , loadingMenus} = useSelector(state => state.menus)
  const {topBar } = useSelector(state => state.topBar)

  const topBarRandom = context.getItemsRandomFromArray(topBar , 7)

  
  
  const closeModal = ()=> {
    setIsShowModalLogin(false)
    setIsShowModalMessage(false)
  }
  
  useEffect(()=> {

    dispatch(
      getTopBarMenusFromServer()
    )

    dispatch(
      getMenusFromServer()
    )

  },[])


  useEffect(()=>{


    setInterval(()=>{

      dispatch(
        getTopBarMenusFromServer()
      )
  
      dispatch(
        getMenusFromServer()
      )
  
    },8500)

    
    
  },[])
  
  
  return (
    <div>

      <div>
          <ul className='flex gap-x-5 border-b-2 py-2 px-4'>

            {
              topBarRandom?.map(topBar => (
                <LinkTopBar key={topBar._id}
                title={topBar.title}
                link={topBar.href}/>
              ))


            }

          </ul>
      </div>

      <div className='flex items-center justify-between px-14 h-20 bg-primary text-white '>
        <div className='flex gap-5'>
            <img src="" alt="" />
            <ul className='flex gap-6'>
              {
                context.infoUser?.role === 'ADMIN' &&
                <Link to={'/panel-admin'}>
                  پنل مدیریت
                </Link>
              }


              {
                menus.map(menu => (

                  <LinkMenu 
                  key={menu._id}
                  title={menu.title} 
                  link={menu.href} 
                  subMenus={menu.submenus}/>

                ))
              }

            </ul>
        </div>
        <div className='flex items-center gap-6'>

            <div>
              <SearchingPage/>
            </div>    
            
            <div>
              <button className='border-2 p-2 rounded-full border-primaryHover outline-none' onClick={()=> setIsShowModalMessage(true)}>
                  <BiMessage size={25}/>
              </button>
            </div>
            
            <Link to={context.token && '/panel-user/ticket'} className='relative'>
              <button className='border-2 p-2 rounded-full border-primaryHover outline-none' onClick={ ()=> setIsShowModalLogin(true) }>
                  <BiUser size={25}/>
              </button>
            </Link>
            
        </div>
      </div>

      {
        isShowModalLogin && !context.token && <ModalLogin closeModal={closeModal}/>
      }

      {
        isShowModalMessage && <ModalMessage closeModal={closeModal}/>
      }
 



    </div>
  )
}

export default memo(Header)