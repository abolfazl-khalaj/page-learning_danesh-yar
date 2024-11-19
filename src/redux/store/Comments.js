import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosReq from "../../services/axios/config";


export const getCommentsFromServer = createAsyncThunk(
    'comments/getCommentsFromServer',
    async () => {
        const res = await axiosReq.get(`/comments`)
        const result = await res.data

        return result
    }
)

export const sendCommentsCourse = createAsyncThunk(
    'comments/getCommentsFromServer',
    async (infoComment) => {
        const res = await axiosReq.post(`/comments`,infoComment)
    }
)

export const deleteCommentsFromServer = createAsyncThunk(
    'comments/deleteCommentsFromServer',
    async (commentId) => {
        const res = await axiosReq.delete(`/comments/${commentId}`)

    }
)
export const acceptCommentsFromServer = createAsyncThunk(
    'comments/acceptCommentsFromServer',
    async (commentId) => {
        const res = await axiosReq.put(`/comments/accept/${commentId}`)

    }
)
export const rejectCommentsFromServer = createAsyncThunk(
    'comments/rejectCommentsFromServer',
    async (commentId) => {
        const res = await axiosReq.put(`/comments/reject/${commentId}`)

    }
)

const slice = createSlice({
    name : 'comments',
    initialState: {
        comments : [],
        loading : false
    },
    reducers : {},
    extraReducers : (builder) => {

        builder.addCase(getCommentsFromServer.fulfilled , (state , action) => {
            state.comments = action.payload
            state.loading = false
        })

        builder.addCase(getCommentsFromServer.pending , (state , action) => {
            state.loading = true
        })
        

    }
})

export default slice.reducer