import axios from "axios";
import { useContext } from "react";
import ContextApi from '../../context/ContextApi'


const axiosReq = axios.create({
    baseURL : 'http://localhost:4000/v1',
    headers : {
        'Content-Type' : 'application/json'
    }
})


axiosReq.interceptors.request.use((config)=>{
    const token = JSON.stringify(localStorage.getItem('userToken'))

    if(token){
        config.headers.Authorization = `Bearer ${token.slice(3 , token.length - 3)}`
    }

    return config
})


export default axiosReq