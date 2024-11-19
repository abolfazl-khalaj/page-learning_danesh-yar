import MainPage from "./src/pages/MainPage";
import CategoryArticles from './pages/CategoryArticles'
import CategoryCourses from './pages/CategoryCourses'
import Index from './pages/Index'
import MainArticle from './pages/MainArticle'
import MainCourse from './pages/MainCourse'
import Tickets from './pages/panelUser/pages/Tickets'
import CourseMe from './pages/panelUser/pages/CourseMe'
import MainPage from './pages/MainPage'




const routes = [

    {
        path: '/*',
        element : <MainPage/> ,
        children : [
            {path : '', element : <Index/>},
            {path : 'course-info/:shortName', 
                element : <MainCourse/>},
            {path : 'category-courses/:shortName', 
                element : <CategoryCourses/>},
            {path : 'article-info/:shortName', 
                element : <MainArticle/>},
            {path : 'category-articles', 
                element : <CategoryArticles/>},
            {path : 'panel-user/ticket', 
                element : <Tickets/>},
            {path : 'panel-user/courses-me', 
                element : <CourseMe/>},
        ] 
    }




]

export default routes