import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosReq from "../../services/axios/config";

export const getSessionsFromServer = createAsyncThunk(
    'sessions/getSessionsFromServer',
    async () => {
        const res = await axiosReq.get('/courses/sessions')
        const result = await res.data
        
        return result        
    }
)
export const deleteSessionsFromServer = createAsyncThunk(
    'sessions/deleteSessionsFromServer',
    async (sessionsId) => {
        const res = await axiosReq.delete(`/courses/sessions/${sessionsId}`)       
    }
)

export const createSessionsFromServer = createAsyncThunk(
    'sessions/createSessionsFromServer',
    async (courseId , infoSession) => {
        const res = await axiosReq.post(`/courses/${courseId}/sessions`,infoSession)       
    }
)


const slice = createSlice({
    name : 'sessions',
    initialState: {
        sessions : [] ,
        loading : false
    },
    reducers : {},
    extraReducers : (builder) => {

        builder.addCase(getSessionsFromServer.fulfilled , (state , action) => {
            state.sessions = action.payload
            state.loading = false
        })
        builder.addCase(getSessionsFromServer.pending , (state , action) => {
            state.loading = true
        })
        

    }
})

export default slice.reducer