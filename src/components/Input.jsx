import React, { act, useContext, useEffect, useState } from 'react'
import { createStore } from 'redux'
import ContextApi from '../context/ContextApi'
import { isValidEmail } from '../regex/ValidAtor'



export default function Input({type , placeholder,role }) {

    const context = useContext(ContextApi)
    const infos = context.infosUserInPresence
    const [validValue,setValidValue] = useState(true)
    


    const changeInput = event => {

        const value = event.target.value.trim()
        
        infos[role] = {
            value:value ,
        }
    }

  return (
    <div>

        <input 
        type={type}
        placeholder={placeholder}
        className={`w-full py-1 px-2 rounded-md text-sm 
            ${validValue ? 'border-2 border-green-700 outline-green-700' : ' outline-red-800'}`}
        onChange={()=>changeInput(event)}
         />

    </div>

  )
}
