import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosReq from "../../services/axios/config";

export const getCoursesPopularFromServer = createAsyncThunk(
    'coursesPopular/getCoursesPopularFromServer',
    async () => {
        const res = await axiosReq.get('/courses/popular')
        const result = await res.data

        return result        
    }
)

const slice = createSlice({
    name : 'coursesPopular',
    initialState: {
        coursesPopular : [],
        loading : false
    },
    reducers : {},
    extraReducers : (builder) => {

        builder.addCase(getCoursesPopularFromServer.fulfilled , (state , action) => {
            state.coursesPopular = action.payload
            state.loading = false
        } )
        builder.addCase(getCoursesPopularFromServer.pending , (state , action) => {
            state.loading = true
        } )

    }
})

export default slice.reducer