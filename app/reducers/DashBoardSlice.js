import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "./api";

export const dashBoardData = createAsyncThunk(
    'dashBoardData',
    async (user_input, { rejectWithValue }) => {
        try {
            const response = await api.get(`/api/dashboard`,user_input);
            if (response?.data?.status_code === 200) {
                return response.data;
            } else {
                if (response?.data?.errors) {
                    return rejectWithValue(response.data.errors);
                } else {
                    return rejectWithValue('Something went wrong.');
                }
            }
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const calenderData=createAsyncThunk(
    'calenderData',
     async (_, { rejectWithValue }) => {
        try {
            const response = await api.get(`/api/booking-list/list`);
            if (response?.data?.status_code === 200) {
                return response.data;
            } else {
                if (response?.data?.errors) {
                    return rejectWithValue(response.data.errors);
                } else {
                    return rejectWithValue('Something went wrong.');
                }
            }
        } catch (err) {
            return rejectWithValue(err);
        }
    }
)
export const bookingData=createAsyncThunk(
    'bookingData',
     async (_, { rejectWithValue }) => {
        try {
            const response = await api.get(`/api/count/booking`);
            if (response?.data?.status_code === 200) {
                return response.data;
            } else {
                if (response?.data?.errors) {
                    return rejectWithValue(response.data.errors);
                } else {
                    return rejectWithValue('Something went wrong.');
                }
            }
        } catch (err) {
            return rejectWithValue(err);
        }
    }
)
export const userData=createAsyncThunk(
    'userData',
     async (_, { rejectWithValue }) => {
        try {
            const response = await api.get(`/api/count/coustomer`);
            if (response?.data?.status_code === 200) {
                return response.data;
            } else {
                if (response?.data?.errors) {
                    return rejectWithValue(response.data.errors);
                } else {
                    return rejectWithValue('Something went wrong.');
                }
            }
        } catch (err) {
            return rejectWithValue(err);
        }
    }
)

const initialState={
    loading:false,
    error:false,
    dashBoards:[],
    mockApiData:{},
    bookingCount:{},
    userCount:{}
}
const DashBoardSlice=createSlice(
    {
        name:'dash',
        initialState,
        reducers:{},
        extraReducers:(builder)=>{
            builder.addCase(dashBoardData.pending,(state)=>{
                state.loading=true
            })
            .addCase(dashBoardData.fulfilled,(state,{payload})=>{
                state.loading=false
                state.dashBoards=payload
                state.error=false
            })
            .addCase(dashBoardData.rejected,(state,{payload})=>{
                state.loading=false
                state.error=payload
            })
            .addCase(calenderData.pending,(state)=>{
                state.loading=true
            })
            .addCase(calenderData.fulfilled,(state,{payload})=>{
                state.loading=false
                state.mockApiData=payload
                state.error=false
            })
            .addCase(calenderData.rejected,(state,{payload})=>{
                state.loading=false
                state.error=payload
            })
            .addCase(bookingData.pending,(state)=>{
                state.loading=true
            })
            .addCase(bookingData.fulfilled,(state,{payload})=>{
                state.loading=false
                state.bookingCount=payload
                state.error=false
            })
            .addCase(bookingData.rejected,(state,{payload})=>{
                state.loading=false
                state.error=payload
            })
             .addCase(userData.pending,(state)=>{
                state.loading=true
            })
            .addCase(userData.fulfilled,(state,{payload})=>{
                state.loading=false
                state.userCount=payload
                state.error=false
            })
            .addCase(userData.rejected,(state,{payload})=>{
                state.loading=false
                state.error=payload
            })
        }
    }
)
export default DashBoardSlice.reducer;