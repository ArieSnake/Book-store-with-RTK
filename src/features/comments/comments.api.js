import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getComments = createAsyncThunk("comments/get", async (id) => {
    const response = await axios.get("http://localhost:3004/comments?book=" + id)
    return response.data
})

export const  addComment = createAsyncThunk("comments/add", async(commentData) => {
    const response = await axios.post("http://localhost:3004/comments", commentData)
    return response.data
})