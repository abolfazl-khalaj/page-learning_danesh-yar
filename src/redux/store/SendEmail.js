import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosReq from "../../services/axios/config";


export const sendEmail = createAsyncThunk(
    'sendEmail/sendEmail',
    async (email) => {
        const res = await axiosReq.post('/newsletters',{email})

        return res
    }
)