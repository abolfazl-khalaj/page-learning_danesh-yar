import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { deleteCategoryFromServer, getCategoryFromServer, postCategoryFromServer, updateCategoryFromServer } from '../../../redux/store/Categories'
import Category from '../components/Category'

export default function Categories() {

  const [trigger , setTrigger ] = useState(0)

  const dispatch = useDispatch()
  const {categories , loadingCategories} = useSelector(state => state.categories)

  useEffect(()=> {
    dispatch(
        getCategoryFromServer()
    )
  },[trigger])


  const infoCreateCategory = []
  const giveAmountInfoCreateCategory = (event) => { 

      const key = event.target.dataset.value 
      const value = event.target.value 
  
      infoCreateCategory[key] = value  
  }  


  const clickCreateCategory = ()=> {  

    Swal.fire({
        title: "از ساخت دسته بندی مطمعن هستید ؟",
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
                postCategoryFromServer(infoCreateCategory)
            )
          
        }
      })
  }

  const updateCategoryHandler = (props) => {
    console.log(props);
    const infoUpdateCategory = []
    
     Swal.fire({
        input: "text",
        inputLabel: "عنوان دسته بندی",
        inputPlaceholder:`لطفا عنوان دسته بندی ${props.title} تغییر دهید.`,
        inputAttributes: {
          "aria-label": "Type your message here"
        },
        showCancelButton: true
      })
      .then(res => {

        if (res.value) {            

            infoUpdateCategory.title = res.value

            Swal.fire({
                input: "text",
                inputLabel: "کلمه کلیدی دسته بندی",
                inputPlaceholder:`لطفا کلمه کلیدی دسته بندی ${props.name} تغییر دهید.`,
                inputAttributes: {
                  "aria-label": "Type your message here"
                },
                showCancelButton: true
              })
              .then(res => {

                if(res.value) {

                    infoUpdateCategory.name = res.value

                    dispatch(
                        updateCategoryFromServer(props._id , infoUpdateCategory)
                    )

                }

              })


        }
        

      })
  }

  const removeCategoryHandler = categoryId => {


    Swal.fire({
        title: "از حذف دسته بندی مطمعن هستید ؟",
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
                deleteCategoryFromServer(categoryId)
            )
          
        }
      })
    
  }







  return (
    <div>
        <h2 className='mr-5 font-DanaBold text-2xl'>
          اضافه دسته جدید
        </h2>
  
        <div className='flex flex-wrap mt-10 
        children:w-1/2 gap-y-10 children:flex children:items-center 
        children:pr-6 '>
  
          <div>
            <input type="text" 
            placeholder=' عنوان دسته ..'
            className='border-b-2 outline-none'
            data-value='title'
            onBlur={(event)=>giveAmountInfoCreateCategory(event)} />
          </div>

          <div>
            <input type="text" 
            placeholder=' نام کلیدی (زبان انگلیسی)..'
            className='border-b-2 outline-none'
            data-value='name'
            onBlur={(event)=>giveAmountInfoCreateCategory(event)}  />
          </div>
  
          <div>
            <button className='w-52 h-10 bg-primary absolute left-12 text-white rounded-lg'
            onClick={()=>clickCreateCategory()}>
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
                عنوان دسته بندی
              </th>
              <th>
                کلیدی دسته بندی 
              </th>
            </tr>
            <tbody>


                {
                  categories ? (
                    categories.map(category => (
                        <Category key={category._id} {...category}
                        removeCategory={removeCategoryHandler}
                        updateCategory={updateCategoryHandler}/>
                    ))
                  )
                  :
                  <ErrorBox message={'منو وجود ندارد'}/>
                }


            </tbody>
    

        
            </table>
            </div>

        </div>
      
    </div>
  )
}
