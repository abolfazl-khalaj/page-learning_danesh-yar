import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosReq from "../../services/axios/config";


export const getCategoryFromServer = createAsyncThunk(
    'category/getCategoryFromServer',
    async () => {
        const res = await axiosReq.get(`/category`)
        const result = await res.data

        return result
    }
)
export const deleteCategoryFromServer = createAsyncThunk(
    'category/deleteCategoryFromServer',
    async (categoryId) => {
        const res = await axiosReq.delete(`/category/${categoryId}`)
    }
)
export const postCategoryFromServer = createAsyncThunk(
    'category/postCategoryFromServer',
    async (infoCategory) => {
        const res = await axiosReq.post(`/comments`,infoCategory)

    }
)
export const updateCategoryFromServer = createAsyncThunk(
    'category/updateCategoryFromServer',
    async (categoryId , infoCategory) => {
        const res = await axiosReq.put(`/category/${categoryId}`,infoCategory)

    }
)

const slice = createSlice({
    name : 'category',
    initialState: {
        categories : [],
        loading : false
    },
    reducers : {},
    extraReducers : (builder) => {

        builder.addCase(getCategoryFromServer.fulfilled , (state , action) => {
            state.categories = action.payload
            state.loading = false
        })

        builder.addCase(getCategoryFromServer.pending , (state , action) => {
            state.loading = true
        })
        

    }
})

export default slice.reducer