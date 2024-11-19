import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosReq from "../../services/axios/config";

export const getArticlesFromServer = createAsyncThunk(
    'articles/getArticlesFromServer',
        async () => {
            const res = await axiosReq.get('/articles')
            const result = await res.data

            return result        
        }
)

export const createArticlesFromServer = createAsyncThunk(
    'articles/crateArticlesFromServer',
        async (infoArticle) => {
            const res = await axiosReq.post('/articles',infoArticle)      
        }
)


const slice = createSlice({
    name : 'articles',
    initialState: {
        articles : [] ,
        loading : false ,
    },
    reducers : {},
    extraReducers : (builder) => {

        builder.addCase(getArticlesFromServer.fulfilled , (state , action) => {
            state.articles = action.payload
            state.loading = false 
        } )
        builder.addCase(getArticlesFromServer.pending , (state , action) => {
            state.loading = true
        })

    }
})

export default slice.reducer