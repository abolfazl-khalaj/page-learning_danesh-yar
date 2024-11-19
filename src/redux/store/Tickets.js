import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosReq from "../../services/axios/config";


export const getTicketsFromServer = createAsyncThunk(
    'tickets/getTicketsFromServer',
    async () => {
        const res = await axiosReq.get(`/tickets`)
        const result = await res.data

        return result
    }
)

export const answerTicketsFromServer = createAsyncThunk(
    'tickets/answerTicketsFromServer',
    async (answer) => {
        const res = await axiosReq.get(`/tickets`,{answer})
  
    }
)

const slice = createSlice({
    name : 'tickets',
    initialState: {
        tickets : [] ,
        loading : false
    },
    reducers : {},
    extraReducers : (builder) => {

        builder.addCase(getTicketsFromServer.fulfilled , (state , action) => {
            state.tickets = action.payload
            state.loading = false
        })
        builder.addCase(getTicketsFromServer.pending , (state , action) => {
            state.loading = true
        })
        

    }
})

export default slice.reducer