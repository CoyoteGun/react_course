import {createAsyncThunk, createEntityAdapter, createSlice, isRejectedWithValue} from "@reduxjs/toolkit";
import {userService} from "../../services/userService";

const initialState= {
    users:[],
    errors: null,
    loading: null,
    showUser: null
};

const getAll = createAsyncThunk(
    'userSlice/getAll',
    async (_,{rejectWithValue}) =>{
        try {
            const {data} = await userService.getAll();
            return data
        }catch (e){
            return rejectWithValue(e.response.data)
        }
    }
);

const getById = createAsyncThunk(
    'userSlice/getById',
    async ({id}, {rejectWithValue})=>{
       try {
           const {data} = await userService.getById(id);
           return data
       }catch (e){
           return rejectWithValue(e.response.data)
       }
    }
);

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers:{
        showSelectedUser:(state,action) =>{
            state.showUser = action.payload
        }
    },
    extraReducers:{
        [getAll.fulfilled]:(state,action)=> {
            state.loading = false
            state.users = action.payload
        },
        [getAll.rejected]:(state, action) => {
            state.loading = false
            state.errors = action.payload
        },
        [getAll.pending]: (state) => {
            state.loading = true
        },
        [getById.fulfilled]:(state,action)=>{
            state.showUser = action.payload
        }
    }
});

const {reducer:userReducer, actions:{showSelectedUser}} = userSlice;

const userActions = {
    showSelectedUser,
    getAll,
    getById
}

export {
    userReducer,
    userActions
}