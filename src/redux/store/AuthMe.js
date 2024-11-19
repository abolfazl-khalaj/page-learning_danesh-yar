import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosReq from "../../services/axios/config";

export const getInfosMeFromServer = createAsyncThunk(
    'authMe/getInfosMeFromServer',
        async () => {
            try{
                const res = await axiosReq.get('/auth/me')
                return res.data
            }catch {
                console.log('ثبت نام کن جگر (:');
                
            }

        }
)

const slice = createSlice({
    name : 'authMe',
    initialState: [],
    reducers : {},
    extraReducers : (builder) => {

        builder.addCase(getInfosMeFromServer.fulfilled , (articles , action) => {
            return action.payload
        } )

    }
})

export default slice.reducer