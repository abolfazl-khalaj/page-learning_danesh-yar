import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosReq from "../../services/axios/config";

export const getSearchingPageFromServer = createAsyncThunk(
    'searchingPage/getSearchingPageFromServer',
    async (searching) => {
        const res = await axiosReq.get(`/search/${searching}`)
        const result = await res.data
        
        return result        
    }
)


const slice = createSlice({
    name : 'searchingPage',
    initialState: {
        searching : [] ,
        loading : false
    },
    reducers : {},
    extraReducers : (builder) => {

        builder.addCase(getSearchingPageFromServer.fulfilled , (state , action) => {
            state.searching = action.payload
            state.loading = false
        })
        builder.addCase(getSearchingPageFromServer.pending , (state , action) => {
            state.loading = true
        })
        

    }
})

export default slice.reducer