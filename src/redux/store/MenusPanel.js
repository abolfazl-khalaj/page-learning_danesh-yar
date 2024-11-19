import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosReq from "../../services/axios/config";


export const getMenusPanelFromServer = createAsyncThunk(
    'menusPanel/getMenusPanelFromServer',
    async () => {
        const res = await axiosReq.get('/menus/all')
        const result = await res.data

        return result        
    }
)

export const deleteMenusPanelFromServer = createAsyncThunk(
    'menusPanel/deleteMenusPanelFromServer',
    async (menuId) => {

        const res = await axiosReq.delete(`/menus/${menuId}`)

    }
)




const slice = createSlice({
    name : 'menusPanel',
    initialState: {
        menusPanel : [],
        loading : false
    },
    reducers : {},
    extraReducers : (builder) => {

        builder.addCase(getMenusPanelFromServer.fulfilled , (state , action) => {
            state.menusPanel = action.payload
            state.loading = false
        })
        builder.addCase(getMenusPanelFromServer.pending , (state , action) => {
            state.loading = true
        })
        

    }
})

export default slice.reducer