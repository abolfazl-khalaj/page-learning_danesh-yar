import React, { useEffect, useState } from 'react'
import { BsLink45Deg } from 'react-icons/bs'
import { MdOutlineInsertPhoto } from 'react-icons/md'
import Article from '../components/Article'
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux'
import ErrorBox from '../components/ErrorBox'
import { createArticlesFromServer, getArticlesFromServer } from '../../../redux/store/Articles'
import { deleteArticleSelectedFromServer } from '../../../redux/store/ArticleSelected'
import { getCategoryFromServer } from '../../../redux/store/Categories'
import CkEditor from '../components/ckEditor/CkEditor'

export default function Articales() {

  const [trigger , setTrigger] = useState(0)

  const dispatch = useDispatch()
  const {articles , loadingArticle} = useSelector(state => state.articles)
  const {categories , loadingCategories} = useSelector(state => state.categories)


  useEffect(()=> {

    dispatch(
      getArticlesFromServer()
    )
    dispatch(
      getCategoryFromServer()
    )

  },[trigger])


  let infoNewArticle = []
  
  const giveAmountInfoCreateArticle = (event) => {
    const key = event.target.dataset.value
    const value = event.target.value

    infoNewArticle[key] = value
  }




  const changeTextAreaHandler = value => {
    infoNewArticle.body = value
  }

  const changeCategory = event => {
    infoNewArticle.categoryID = event.target.value
  }

  const changeCoverArticle = event => {
    infoNewArticle.cover = event.target.files[0]
  }


  const clickCreateArticle = () => {

    Swal.fire({
      title: "از ساخت مقاله مطمعن هستید ؟",
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

        dispatch(
          createArticlesFromServer(infoNewArticle)
        )
        
      }

    })

  }

  

  const removeArticleHandler = (articleID) => {
  
    
    Swal.fire({
      title: "از حذف مقاله مطمعن هستید ؟",
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
          deleteArticleSelectedFromServer(articleID)
        )
        
        setTrigger(prev => prev + 1)
      }
      
    })

  }




  return (
    <div>
        <h2 className='mr-5 font-DanaBold text-2xl'>
            اضافه کردن مقاله 
        </h2>
        <div className='flex flex-wrap mt-10 relative
      children:w-1/2 gap-y-10 children:flex children:items-center 
      children:pr-6 '>

        <div>
          <input type="text" 
          placeholder=' عنوان مقاله ..'
          className='border-b-2 outline-none'
          data-value='title'
          onBlur={(event)=>giveAmountInfoCreateArticle(event)} />
        </div>

        <div>
           <BsLink45Deg size={20}/>

          <input type="text" 
          placeholder=' URL مقاله ..' 
          className='border-b-2 outline-none'
          data-value='shortName'
          onBlur={(event)=>giveAmountInfoCreateArticle(event)} />
        </div>

        <div>
          <MdOutlineInsertPhoto size={20}/>
          <input type="file" 
          className='border-b-2 outline-none'
          onChange={(event)=>changeCoverArticle(event)}/>
        </div>

        <div>
          <select placeholder=' ..' className='border-b-2 outline-none w-1/3'
          onChange={(event)=> changeCategory(event)}>

          <option value="-1"> انتخاب دسته بندی </option>

            {
              categories?.map(category => (

                <option value={category._id}> {category.title} </option>

              ))
            }

          </select>
        </div>



        <textarea className='mr-5 h-32 border-2 p-4 outline-none' placeholder='توضیحات کوتاه درباره مقاله ....'
        data-value='description'
        onBlur={(event)=>giveAmountInfoCreateArticle(event)} >
        </textarea>

        <div className='mb-20'>
          <CkEditor changeTextArea={changeTextAreaHandler}/>
        </div>

        <div className='absolute bottom-2 left-1'>
          <button className='w-52 h-10 bg-primary absolute left-12 text-white rounded-lg'
          onClick={()=>clickCreateArticle()}>
            ثبت مقاله
          </button>
        </div>

        </div>

        <div className='w-full my-10 border-t-2 border-primary'>
                  
        <table className='w-[80%] mx-auto text-center mt-6'>

            <thead>
              <tr className='border-b-2 border-primary'>
                <th>
                  عنوان مقاله
                </th>
                <th>
                  تاریخ انتشار
                </th>
                <th>
                  نویسنده
                </th>
              </tr>
            </thead>

            <tbody>


              {
                articles.length > 0 && articles ?
                (
                  articles.map(article => (
                    <Article key={article._id} {...article} removeArticle={removeArticleHandler}/>
                  ))
                )
                :
                <ErrorBox message={'مقاله ای انتشار نداده اید'}/>
              }

            </tbody>
    

        
            </table>

        </div>

    </div>
  )
}
