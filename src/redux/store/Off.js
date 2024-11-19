import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosReq from "../../services/axios/config";


export const getAllOffs = createAsyncThunk(
    'off/getAllOffs',
    async () => {
        const res = await axiosReq.get('/offs')        
    }
)
export const offAllCourses = createAsyncThunk(
    'off/offAllCourses',
    async (discount) => {
        const res = await axiosReq.post('/offs/all',discount)        
    }
)
export const offOneCourse = createAsyncThunk(
    'off/offOneCourse',
    async (infoOff) => {
        const res = await axiosReq.post(`/offs`,infoOff)
    }
)

export const deleteOff = createAsyncThunk(
    'off/deleteOff',
    async (idCourse) => {
        const res = await axiosReq.delete(`/offs/${idCourse}`)
    }
)


const slice = createSlice({
    name : 'offs',
    initialState: {
        offs : [] , 
        loading : false
    },
    reducers : {},
    extraReducers : (builder) => {

        builder.addCase(getAllOffs.fulfilled , (state , action) => {
            state.offs = action.payload
            state.loading = false
        })
        builder.addCase(getAllOffs.pending , (state , action) => {
            state.loading = true
        })

    }
})

export default slice.reducer