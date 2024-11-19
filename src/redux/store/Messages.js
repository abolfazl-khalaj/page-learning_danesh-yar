import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosReq from "../../services/axios/config";

export const getMessagesFromServer = createAsyncThunk(
    'messages/getMessagesFromServer',
    async () => {
        const res = await axiosReq.get('/contact')
        const result = await res.data
        
        return result        
    }
)
export const deleteMessagesFromServer = createAsyncThunk(
    'messages/deleteMessagesFromServer',
    async (messageId) => {

        const res = await axiosReq.delete(`/contact/${messageId}`)

    }
)

export const answerMessagesFromServer = createAsyncThunk(
    'messages/answerMessagesFromServer',
    async (answer) => {
        const res = await axiosReq.post(`/contact/answer`,answer)
    }
)


const slice = createSlice({
    name : 'messages',
    initialState: {
        messages : [] , 
        loading : false
    },
    reducers : {},
    extraReducers : (builder) => {

        builder.addCase(getMessagesFromServer.fulfilled , (state , action) => {
            state.messages = action.payload
            state.loading = false
        })
        builder.addCase(getMessagesFromServer.pending , (state , action) => {
            state.loading = true
        })

    }
})

export default slice.reducer