import React, { useContext, useEffect, useState } from 'react'
import BreadCrumbs from '../components/BreadCrumb'
import { RiFile2Line2 } from 'react-icons/ri'
import { FaPencil, FaRegMessage } from 'react-icons/fa6'
import { CiStopwatch } from 'react-icons/ci'
import { LiaEye } from 'react-icons/lia'
import { BiCheck } from 'react-icons/bi'
import { PiShieldWarning } from 'react-icons/pi'
import ContextApi from '../context/ContextApi'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getArticleSelectedFromServer } from '../redux/store/ArticleSelected'
import CommentSend from '../components/CommentSend'


export default function Article() {

  window.scroll(0,0)

  const { shortName } = useParams()
  const dispatch = useDispatch()

  const context = useContext(ContextApi)
  console.log(context.infoUser);
  

  
  const {article , loadingArticle} = useSelector(state => state.articleSelected)
  const [categoryArticle , setCategoryArticle] = useState([])
  const [creatorArticle , setCreatorArticle] = useState([])
  console.log(article);
  

  useEffect(()=>{

    dispatch(
      getArticleSelectedFromServer(shortName)
    )
    
    setCategoryArticle({...article.categoryID})
    setCreatorArticle({...article.creator})

  },[])  


  const HtmlContent = ({ htmlString }) => {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: htmlString }}
      />
    );
  };


  return (
    <div className='flex justify-between'>
      <div className='w-4/5'>

        <div className='my-6 border-2 p-3'>
          <div className='border-b-2 border-primaryHover pb-3'>
            <h1 className='text-2xl font-DanaBold '>
              {article.title}
            </h1>

            <ul className='flex 
            gap-x-4
            mt-3
            text-gray-400
            items-center
            children:flex
            children:items-center
            children:gap-x-1'>
              <li>
                <RiFile2Line2 size={20}/>
                {categoryArticle?.title}
              </li>
              <li>
              <FaPencil size={20}/>
                {creatorArticle?.name}

              </li>
              <li>
              <CiStopwatch size={25}/>
                {article.createdAt}
              </li>
            </ul>
          </div>

          <div className='leading-5 children:leading-7 text-gray-600 pt-4'>

            {
              <HtmlContent htmlString={article.body} />
            }

          </div>



        </div>

        <div className='border-2 p-5'>

            <CommentSend/>

        </div>

      </div>


    </div>
  )
}
