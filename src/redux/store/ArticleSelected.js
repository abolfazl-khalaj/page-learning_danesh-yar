import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosReq from "../../services/axios/config";


export const getArticleSelectedFromServer = createAsyncThunk(
    'articleSelected/getArticleSelectedFromServer',
    async (shortName) => {
        const res = await axiosReq.get(`/articles/${shortName}`)
        const result = await res.data

        return result
    }
)

export const deleteArticleSelectedFromServer = createAsyncThunk(
    'articleSelected/deleteArticleSelectedFromServer',
    async (articleID) => {
        const res = await axiosReq.delete(`/articles/${articleID}`)
    }
)

const slice = createSlice({

    name : 'articleSelected',
    initialState: {
        article : [],
        loading : false
    },
    reducers : {},
    extraReducers : (builder) => {

        builder.addCase(getArticleSelectedFromServer.fulfilled , (state , action) => {
            state.article = action.payload
            state.loading = false
        })
        builder.addCase(getArticleSelectedFromServer.pending , (state , action) => {
            state.loading = true
        })
        

    }
})

export default slice.reducer