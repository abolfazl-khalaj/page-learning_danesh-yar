
import './App.css'
import Article from './components/Article'
import Course from './components/Course'
import Footer from './components/Footer'
import Header from './components/Header'
import CategoryArticles from './pages/CategoryArticles'
import CategoryCourses from './pages/CategoryCourses'
import Index from './pages/Index'
import MainArticle from './pages/MainArticle'
import MainCourse from './pages/MainCourse'
import { memo, useContext, useEffect, useState } from 'react'
import ContextApi from './context/ContextApi'
import context from 'react-bootstrap/esm/AccordionContext'
import { Route, Routes, useRoutes } from 'react-router-dom'
import Tickets from './pages/panelUser/pages/Tickets'
import CourseMe from './pages/panelUser/pages/CourseMe'
import MainPage from './pages/MainPage'
import ConditionPAdmin from './components/ConditionPAdmin'
import MainPageAdmin from './pages/panelAdmin/MainPageAdmin'
import Users from './pages/panelAdmin/pages/Users'
import Orders from './pages/panelAdmin/pages/Orders'
import Courses from './pages/panelAdmin/pages/Courses'
import Sale from './pages/panelAdmin/pages/Sale'
import Home from './pages/panelAdmin/pages/Home'
import Articles from './pages/panelAdmin/pages/Articles'
import Menus from './pages/panelAdmin/pages/Menus'
import Messages from './pages/panelAdmin/pages/Messages'
import Comments from './pages/panelAdmin/pages/Comments'
import Discounts from './pages/panelAdmin/pages/Discounts'
import Sessions from './pages/panelAdmin/pages/Sessions'
import TicketsP from './pages/panelAdmin/pages/TicketsP'
import { useDispatch, useSelector } from 'react-redux'
import { getInfosMeFromServer } from './redux/store/AuthMe'
import axiosReq from './services/axios/config'
import InfosUser from './context/ContextApi'
import Categories from './pages/panelAdmin/pages/Categories'


function App() {

  const [infosUserInPresence , setInfosUserInPresence] = useState({})
  const [isLogged , setIsLogged] = useState(false)
  const [token , setToken] = useState('')
  const [infoUser , setInfoUser] = useState([])
  const context = useContext(ContextApi)


  const dispatch = useDispatch()
  const authMe = useSelector(state => state.infosMe)

  
  const login = (dataUser , token)=> {
    setInfoUser(dataUser)
    setToken(token)
    setIsLogged(true)
    localStorage.setItem('userToken',JSON.stringify(token))
    
  }
  const logout = ()=> {
    setToken(undefined)
    setIsLogged(false)
    setInfosUserInPresence({})
    localStorage.removeItem('userToken')
  }
  const getItemsRandomFromArray = (object ,randomCont)=> {
    const array = Object.entries(object)
    const shuffled = array.sort(()=> 0.5 - Math.random())
    const obj = shuffled.map(arr => arr[1])
    return obj.slice( 0 , randomCont)
  }

  useEffect(()=>{
    const localStorageData = localStorage.getItem('userToken')
    

    if(localStorageData?.token){
      setToken(JSON.parse(localStorageData.token))


      dispatch(
        getInfosMeFromServer()
      )
      setInfoUser(authMe)
  
      

      
    }
    

  },[isLogged])

  

  return (
  <>
    <ContextApi.Provider 
    value={{
      
      infosUserInPresence,
      isLogged,
      infoUser,
      token,
      login,
      logout,
      getItemsRandomFromArray
    }
    }>



        
        <Routes>
          <Route path='' element={<MainPage/>}>
            <Route path='' element={<Index/>}/>

            <Route 
              path='course-info/:shortName' 
              element={<MainCourse/>}/>

            <Route 
              path='category-courses/:shortName' 
              element={<CategoryCourses/>}/>

            <Route 
              path='article-info/:shortName' 
              element={<MainArticle/>}/>

            <Route 
              path='category-articles' 
              element={<CategoryArticles/>}/>

              
            <Route 
              path='panel-user/ticket' 
              element={<Tickets/>}/>

            <Route 
              path='panel-user/courses-me' 
              element={<CourseMe/>}/>  
          </Route>

          <Route path='/panel-admin/*' 
          element={<ConditionPAdmin><MainPageAdmin/></ConditionPAdmin>}>

            <Route path='' element={<Home/>}/>
            <Route path='sale' element={<Sale/>}/>
            <Route path='courses' element={<Courses/>}/>
            <Route path='order' element={<Orders/>}/>
            <Route path='users' element={<Users/>}/>
            <Route path='discounts' element={<Discounts/>}/>
            <Route path='comments' element={<Comments/>}/>
            <Route path='message' element={<Messages/>}/>
            <Route path='menus' element={<Menus/>}/>
            <Route path='articles' element={<Articles/>}/>
            <Route path='sessions' element={<Sessions/>} />
            <Route path='tickets' element={<TicketsP/>} />
            <Route path='categories' element={<Categories/>} />
            

          </Route>




        </Routes>




    </ContextApi.Provider>

    </>
  )
}

export default memo(App)
