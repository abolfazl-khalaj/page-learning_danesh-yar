import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles('dark', {
    backgroundColor: 'rgba(255, 255, 255, .05)',
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions(props) {



  return (
    <div>
      <Accordion >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography className='flex gap-x-2 items-center'>
            <div className='font-Dana'>
                <span>موضوع :</span>
                <span>{props.title}</span>
            </div>
            <div>
                {
                    props.isAnswer === 1 ? (
                        <span className='text-[8px] p-1 text-blue-500 bg-green-300 border-2 border-green-600 font-Dana mb-1'>پاسخ داده شد</span>
                    ):(
                        <span className='text-[8px] p-1 text-black bg-red-300 border-2 border-red-700 font-Dana mb-1'>متنظر جواب</span>
                    )
                }
            </div>

          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='py-4'>
            {props.body}
          </Typography>

          {
            props.isAnswer === 1 && (

            <Typography className='py-4 border-t-2 flex flex-col gap-y-1'>
                <span className='font-DanaMedium'>پاسخ :</span>
                <p>
                    {props.body}                
                </p>
            </Typography>

            )
          }

        </AccordionDetails>
      </Accordion>
    </div>
  );
}
