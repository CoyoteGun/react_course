import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postService} from "../../services/postService";

const initialState = {
    posts:[],
    errors: null,
    loading: null
}

const getAll = createAsyncThunk(
    'postSlice/getAll',
    async (_, {rejectWithValue}) =>{
        try {
            const {data} = await postService.getAll();
            return data
        }catch (e){
            return rejectWithValue(e.response.data)
        }
    }
);

const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        getAll:(state,action) => {
            state.posts = action.payload
        }
    },
    extraReducers: {
        [getAll.fulfilled]: (state, action) => {
            state.loading = false
            state.posts = action.payload
        },
        [getAll.rejected]:(state, action) => {
            state.loading = false
            state.errors = action.payload
        },
        [getAll.pending]:(state) => {
            state.loading = true
        }
    }
});

const {reducer:postReducer} = postSlice;

const postActions = {
    getAll
}

export {
    postReducer,
    postActions
}