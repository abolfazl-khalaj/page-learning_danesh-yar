import { createAsyncThunk } from "@reduxjs/toolkit"
import axiosReq from "../../services/axios/config";


export const getCourseAccepted = createAsyncThunk(
    'course/getCourseAccepted',
    async (courseAccept) => {
        const res = await axiosReq.get(`/courses/${courseAccept}`)
        const result = await res.data

        return result        
    }
)


