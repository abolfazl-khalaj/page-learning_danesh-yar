import React, { useContext, useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails/AccordionDetails';
import Typography from '@mui/material/Typography/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FaRegPlayCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ModalShowSession from './ModalShowSession';

export default function AccordionCourse({sessions}) {

  const [isShowVideoSession , setIsShowVideoSession] = useState(false)
  const [infoSession , setInfoSession] = useState([])

  const showVideoSession = (session) => {
    setInfoSession(session)
    setIsShowVideoSession(true)
  }

  const closeModalHandler = () => {
    setIsShowVideoSession(false)
  }
  

  return (
    <div>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          style={{background:'#F4F6FF'}}
        >
          <Typography >
            <span className='font-DanaBold'>
                جلسات
            </span>
          </Typography>
        </AccordionSummary>

        <AccordionDetails>



          {

            sessions?.map((session ,index) => (
              <Typography key={session._id}>
                <div className='font-DanaMedium border-b-2 hover:border-primary py-2 flex justify-between cursor-pointer'
                onClick={()=>showVideoSession(session)}>
                    <div>
                        <span
                        className='px-2  text-center bg-slate-400 text-white rounded-lg ml-3'>
                            {index + 1}
                        </span>
                        <Link href="">
                            {session.title}
                        </Link>
                    </div>
                    <div className='flex gap-x-1'>
                        <span className='font-DanaBold'>
                          {session.time}
                        </span>
                        <FaRegPlayCircle size={20} className='text-slate-400'/>
                    </div>
                </div>
              </Typography>
            ))

          }


        </AccordionDetails>

      </Accordion>
      {
        isShowVideoSession && <ModalShowSession {...infoSession} closeModal={closeModalHandler}/>
      }
    </div>
  );
}
