import { createSlice } from "@reduxjs/toolkit"
import { addComment, getComments } from "./comments.api"

const initialState = {
    items:[]
}

const CommentsSlice = createSlice({
    name:'comment',
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder
        .addCase(getComments.fulfilled, (state, action) => {
            state.items = action.payload
        })
        .addCase(addComment.fulfilled, (state, action) => {
            
        })
    }
})

export const commentReducer = CommentsSlice.reducer