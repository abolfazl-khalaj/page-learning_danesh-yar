import React, { useEffect, useState } from 'react'
import Comment from '../components/Comment'
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { acceptCommentsFromServer, deleteCommentsFromServer, getCommentsFromServer, rejectCommentsFromServer } from '../../../redux/store/Comments';
import ErrorBox from '../components/ErrorBox'

export default function Comments() {

  const [trigger , setTrigger] = useState(0)
  const dispatch = useDispatch()
  const {comments , loadingComments} = useSelector(state => state.comments)

  useEffect(()=> {

    dispatch(
      getCommentsFromServer()
    )



  },[trigger])

  console.log(comments);
  


  const removeCommentHandler = (commentId) => {
    

    Swal.fire({
      title: "از حذف کامنت مطمعن هستید ؟",
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
          deleteCommentsFromServer(commentId)
        )
        setTrigger(prev => prev + 1)

      }
    })

  }

  const acceptCommentHandler = (commentId) => {


    Swal.fire({
      title: "از تایید در نمایش مطمعن هستید ؟",
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
          acceptCommentsFromServer(commentId)
        )
        setTrigger(prev => prev + 1)

      }
      
    })

  }

  const rejectCommentHandler = (commentId) => {


    Swal.fire({
      title: "از رد کردن کامنت مطمعن هستید ؟",
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
          rejectCommentsFromServer(commentId)
        )
        setTrigger(prev => prev + 1)

      }
      
    })

  }

  const answerCommentHandler = () => {


    const { value: text } = Swal.fire({
      input: "textarea",
      inputLabel: "پاسخ تیکت",
      inputPlaceholder: "پاسخ خود را بنویسید ..",
      inputAttributes: {
        "aria-label": "Type your message here"
      },
      showCancelButton: true
    })
    if (text) {
      Swal.fire(text);
    }

  }

  const showCommentHandler = (body) => {


    Swal.fire({
      title: body ,
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      }
    });
    

  }

  return (
    <div>
      <h2 className='mr-5 font-DanaBold text-2xl'>
        کامنت ها 
      </h2>

      <div className='w-full mt-10'>
        <table className='w-[90%] mx-auto text-center '>

          <thead>
            <tr className='border-b-2 border-primary'>
            <th>
              پاسخ
            </th>
            <th>
              اسم کاربر
            </th>
            <th>
              دوره
            </th>
            <th>
              تاریخ 
            </th>
            <th>
            ساعت
            </th>


            </tr>
          </thead>

          <tbody>
            {

              comments.length > 0 && comments ?
              (
                comments.map(comment => (
                  <Comment key={comment._id} {...comment} 
                  showComment={showCommentHandler}
                  removeComment={removeCommentHandler}
                  acceptComment={acceptCommentHandler}
                  rejectComment={rejectCommentHandler}
                  answerComment={answerCommentHandler}/>
                ))
              )
              :
              <ErrorBox message={'کامنتی وجود ندارد..'}/>

            }

          </tbody>

        </table>

      </div>
    </div>
  )
}
