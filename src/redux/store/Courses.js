import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosReq from "../../services/axios/config";

export const getCoursesFromServer = createAsyncThunk(
    'courses/getCoursesFromServer',
    async () => {
        const res = await axiosReq.get('/courses')
        const result = await res.data

        return result        
    }
)

export const registerToCourse = createAsyncThunk(
    'registerToCourse/registerToCourse',
    async (idCourse ,priceCourse) => {
        const res = await axiosReq.post(`/courses/${idCourse}/register`,priceCourse)       
    }
)

export const getCourseAccepted = createAsyncThunk(
    'course/getCourseAccepted',
    async (courseAccept) => {
        const res = await axiosReq.get(`/courses/${courseAccept}`)
        const result = await res.data

        return result        
    }
)

export const deleteCoursesFromServer = createAsyncThunk(
    'courses/deleteCoursesFromServer',
    async (idCourses) => {
        const res = await axiosReq.delete(`/courses/${idCourses}`)
    }
)

export const createCoursesFromServer = createAsyncThunk(
    'courses/createCoursesFromServer',
    async (infoCreateCourse) => {
        const res = await axiosReq.post(`/courses`,infoCreateCourse)
    }
)



const slice = createSlice({
    name : 'courses',
    initialState: {
        courses : [],
        courseAccept : [] ,
        loadingCourseAcc : false ,
        loading : false
    },
    reducers : {},
    extraReducers : (builder) => {

        builder.addCase(getCoursesFromServer.fulfilled , (state , action) => {
            state.courses = action.payload
            state.loading = false
        })

        builder.addCase(getCourseAccepted.fulfilled , (state , action) => {
            state.courseAccept = action.payload
        })
        
        builder.addCase(getCoursesFromServer.pending , (state , action) => {
            state.loading = true
        })
        builder.addCase(getCourseAccepted.pending , (state , action) => {
            state.loadingCourseAcc = true
        })
        

    }
})

export default slice.reducer