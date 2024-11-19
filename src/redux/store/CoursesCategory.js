import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosReq from "../../services/axios/config";


export const getCoursesCategoryFromServer = createAsyncThunk(
    'coursesCategory/getCoursesCategoryFromServer',
    async (shortName) => {
        console.log(shortName);
        
        const res = await axiosReq.get(`/courses/category/${shortName}`)
        const result = await res.data

        return result
    }
)

const slice = createSlice({
    name : 'coursesCategory',
    initialState: {
        coursesCategory : [] ,
        loading : false
    },
    reducers : {},
    extraReducers : (builder) => {

        builder.addCase(getCoursesCategoryFromServer.fulfilled , (state , action) => {
            state.coursesCategory = action.payload
            state.loading = false
        })
        builder.addCase(getCoursesCategoryFromServer.pending , (state , action) => {
            state.loading = true
        })

        
        

    }
})

export default slice.reducer