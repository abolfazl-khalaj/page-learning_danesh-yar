import React, { useContext, useEffect, useState } from 'react'
import { BiAlignLeft, BiBorderAll } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { getArticlesFromServer } from '../redux/store/Articles'
import Article from '../components/Article'

export default function CategoryArticles() {
  window.scroll(0,0)

  const [orderArticles , setOrderArticles ] = useState([])

  const dispatch = useDispatch()
  const {articles , loadingArticles } = useSelector(state => state.articles)
  console.log(articles);
  

  useEffect(()=>{

    dispatch(
      getArticlesFromServer()
    )
    setOrderArticles(articles)

  },[])

  const searchingArticles = event => {

    setOrderArticles(articles.filter(article => {
      return article.title.includes(event.target.value)
  }))

  }
  

  return (
    <>

         <div className='border-2 py-3 px-5 flex justify-between items-center'>
            <div className='flex items-center gap-2'>

            </div>
            <div>
                <div>
                    <input className='outline-none border-primary border-b-2 w-60' type="text" placeholder='جست و جو ....' 
                    onChange={(e)=>searchingArticles(e)}/>
                </div>
            </div>
        </div>
      
        <div className='row mt-10 flex flex-wrap gap-x-[81px] gap-y-6'>

          {
            orderArticles && orderArticles.length > 0 ?
            orderArticles.map(article => (
              <Article key={article._id} {...article}/>
            ))
            :
            <p>مقاله ای وجود ندارد</p>
          }


        </div>
    </>
  )
}
