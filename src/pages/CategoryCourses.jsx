import React, { useContext, useEffect, useState } from 'react'
import FilteredProducts from '../components/FilteredProducts'
import { BiAlignLeft, BiBorderAll } from 'react-icons/bi'
import Course from '../components/Course'
import Pagination from '../components/Pagination'
import { useParams } from 'react-router-dom'
import ContextApi from '../context/ContextApi'
import { useDispatch, useSelector } from 'react-redux'
import { getCoursesFromServer } from '../redux/store/Courses'
import { getCoursesCategoryFromServer } from '../redux/store/CoursesCategory'

export default function CategoryCourses() {

    window.scroll(0,0)

      const context = useContext(ContextApi);
      const { shortName } = useParams();
      const [valueSearch, setValueSearch] = useState('');
      const [coursesCategorySelected, setCoursesCategorySelected] = useState([]);
      const [orderCourses, setOrderCourses] = useState([]);
      const [valueSelectedFiltering, setValueSelectedFiltering] = useState('');
    
      const dispatch = useDispatch();
      const { courses, loadingCourses } = useSelector((state) => state.courses);
      const { coursesCategory, loading } = useSelector((state) => state.coursesCategory);
    
      useEffect(() => {
        setCoursesCategorySelected([]);
        setOrderCourses([]);
    
        if (shortName === 'all') {
          dispatch(getCoursesFromServer());
        } else {
          dispatch(getCoursesCategoryFromServer(shortName));
        }
      }, [shortName, dispatch]);
    
      useEffect(() => {
        if (courses.length > 0) {
          setCoursesCategorySelected(courses);
          setOrderCourses(courses);
        }
      }, [courses]);
    
      useEffect(() => {
        if (coursesCategory.length > 0) {
          setCoursesCategorySelected(coursesCategory);
          setOrderCourses(coursesCategory);
        }
      }, [coursesCategory]);
    
      const changeValueSearch = (value) => {
        setValueSearch(value);
        setOrderCourses(coursesCategorySelected.filter((course) => course.name.includes(value)));
      };
    
      const filteredCourses = (valueSelected) => {
        setValueSelectedFiltering(valueSelected);
        conditionSortCourses(valueSelected);
      };
    

      const conditionSortCourses = (valueCondition) => {
        
        switch (valueCondition) {
          case 'default':
            setOrderCourses(coursesCategorySelected);
            break;
          case 'free':
            const filteredFree = coursesCategorySelected.filter((course) => course.price === 0);
            setOrderCourses(filteredFree);
            break;
          case 'money':
            const filteredMoney = coursesCategorySelected.filter((course) => course.price !== 0);
            setOrderCourses(filteredMoney);
            break;
          case 'first':
            const filteredFirstCourses = coursesCategorySelected.slice().reverse();
            setOrderCourses(filteredFirstCourses);
            break;
          case 'cheap':
            const filteredCheapCourses = coursesCategorySelected
              .filter((course) => course.price !== 0)
              .sort((a, b) => a.price - b.price);
            setOrderCourses(filteredCheapCourses);
            break;
          case 'expensive':
            const filteredExpensiveCourses = coursesCategorySelected
              .filter((course) => course.price !== 0)
              .sort((a, b) => b.price - a.price);
            setOrderCourses(filteredExpensiveCourses);
            break;
          case 'moneyUser':
            const filteredMoneyUserCourses = coursesCategorySelected
              .filter((course) => course.registers !== 0)
              .sort((a, b) => b.registers - a.registers);
            setOrderCourses(filteredMoneyUserCourses);
            break;
          case 'lowUser':
            const filteredLowUserCourses = coursesCategorySelected
              .filter((course) => course.registers !== 0)
              .sort((a, b) => a.registers - b.registers);
            setOrderCourses(filteredLowUserCourses);
            break;
          default:
            setOrderCourses(coursesCategorySelected);
            break;
        }
      };
    
   
    const optionFilters = [
        { id: 1, title: 'تمام دوره ها', value: 'default' },
        { id: 2, title: 'دوره های رایگان', value: 'free' },
        { id: 3, title: 'دوره های پولی', value: 'money' },
        { id: 4, title: 'بر اساس اولین دوره ها', value: 'first' },
        { id: 5, title: 'بر اساس ارزان ترین دوره ها', value: 'cheap' },
        { id: 6, title: 'بر اساس گران ترین دوره ها', value: 'expensive' },
        { id: 7, title: 'پر کاربر ترین دوره ها', value: 'moneyUser' },
        { id: 8, title: 'کم کاربر ترین دوره ها', value: 'lowUser' },
      ];
    

    
    

  return (
    <>

        <div className='border-2 py-3 px-5 flex justify-between items-center'>
            <div className='flex items-center gap-2'>
                <div className='bg-primary text-white'>
                    <BiAlignLeft size={25} cursor={'pointer'}/>
                </div>
                <div>
                    <BiBorderAll size={25} cursor={'pointer'}/>
                </div>
                <div>
                    <FilteredProducts title={'مرتب سازی پیش فرض تمام دوره ها اخرین دوره ها'} options={optionFilters} funcFiltered={filteredCourses}/>
                </div>
            </div>
            <div>
                <div>
                    <input className='outline-none border-primary border-b-2 w-72' type="text" placeholder='جست و جو ....'
                    onChange={()=>changeValueSearch(event.target.value)}/>
                </div>
            </div>
        </div>


        <div className='row mt-10 flex flex-wrap justify-between gap-y-6'>

            
            {
                
                orderCourses.length && orderCourses ?
                orderCourses.map(course => (
                    <Course key={course._id} {...course}/>

                ))
                :
                
                <div className='w-full bg-primaryHover p-16 text-center'>
                    <span className='text-zinc-500 text-2xl font-DanaBold'>
                        برای این حیطه فعلا دوره ای ساخته نشده
                    </span>
                </div>    


            }



        </div>


      
    </>
  )
}
