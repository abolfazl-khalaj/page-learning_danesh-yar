import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosReq from "../../services/axios/config";


export const getUsersFromServer = createAsyncThunk(
    'users/getUsersFromServer',
    async () => {
        const res = await axiosReq.get(`/users`)
        const result = await res.data

        return result
    }
)

export const registerUsersFromServer = createAsyncThunk(
    'users/createUsersFromServer',
    async (infoUser) => {
        const res = await axiosReq.post(`/auth/register`,infoUser)
    }
)

export const deleteUsersFromServer = createAsyncThunk(
    'users/deleteUsersFromServer',
    async (userId) => {
        const res = await axiosReq.delete(`/users/${userId}`)

    }
)

const slice = createSlice({
    name : 'users',
    initialState: [],
    reducers : {},
    extraReducers : (builder) => {

        builder.addCase(getUsersFromServer.fulfilled , (state , action) => {
            return action.payload
        })

        

    }
})

export default slice.reducer