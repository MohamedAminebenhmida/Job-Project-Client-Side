import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";



// get post
export const currentPost = createAsyncThunk(
    "post/currentPost",
    async (arg, { rejectWithValue }) => {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        try {
            const res = await axios.get("/post/currentPost", config);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response.data.errors);
        }
    }
);

export const postSlice = createSlice({
    name: "post",
    initialState:{value:{
    post: null,
    auth: false,
    loading: false,
}},
    reducers: {
        postState: (state,action) => {
            state.post.value = action.payload;
        },
    },
    extraReducers(builder) {
        builder
           
            .addCase(currentPost.pending, (state, { payload }) => {
                state.loading = true;
            })
            .addCase(currentPost.fulfilled, (state, { payload }) => {
                state.post = payload;
                state.auth = true;
                state.loading = false;
            })
            .addCase(currentPost.rejected, (state, { payload }) => {
                state.post = null;
                state.auth = false;
                state.loading = false;
                payload.forEach((error) => toast.error(error.msg));
            });
    },
});
export const { postState } = postSlice.actions;
export default postSlice.reducer;