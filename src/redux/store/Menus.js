import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosReq from "../../services/axios/config";

export const getMenusFromServer = createAsyncThunk(
    'menus/getMenusFromServer',
    async () => {
        const res = await axiosReq.get('/menus')
        const result = await res.data
        
        return result        
    }
)

export const createMenusFromServer = createAsyncThunk(
    'menus/createMenusFromServer',
    async (infoMenu) => {
        const res = await axiosReq.post('/menus/',infoMenu)
    }
)



const slice = createSlice({
    name : 'menus',
    initialState: {
        menus : [],
        loading : false
    },
    reducers : {},
    extraReducers : (builder) => {

        builder.addCase(getMenusFromServer.fulfilled , (state , action) => {
            state.menus = action.payload 
            state.loading = false
        })
        builder.addCase(getMenusFromServer.pending , (state , action) => {
            state.loading = true
        })
        

    }
})

export default slice.reducer