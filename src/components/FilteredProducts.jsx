import { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel/InputLabel';
import MenuItem from '@mui/material/MenuItem/MenuItem';
import FormControl from '@mui/material/FormControl/FormControl';
import Select from '@mui/material/Select/Select';

export default function SelectVariants(props) {


  return (
    <div>
      <FormControl variant="standard" sx={{height : 57, width: 220 }}>
        <InputLabel id="demo-simple-select-standard-label" className='text-black'>{props.title ? props.title : ''}</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          onClick={(e)=>props.funcFiltered(e.target.dataset.value)}
        >
          
          {
            props?.options?.map(option => (
              <MenuItem key={option.id} value={`${option.value}`}>
                {option.title}
              </MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </div>
  );
}
