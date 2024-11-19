import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosReq from "../../services/axios/config";

export const getTopBarMenusFromServer = createAsyncThunk(
    'topBarMenus/getTopBarMenusFromServer',
    async () => {
        const res = await axiosReq.get('/menus/topbar')
        return res.data
        
    }
)


const slice = createSlice({
    name : 'topBar',
    initialState: {
        topBar : [] ,
        loading : false
    },
    reducers : {},
    extraReducers : (builder) => {

        builder.addCase(getTopBarMenusFromServer.fulfilled , (state , action) => {
            state.topBar = action.payload
            state.loading = false
        })
        builder.addCase(getTopBarMenusFromServer.pending , (state , action) => {
            state.loading = true
        })
        

    }
})

export default slice.reducer