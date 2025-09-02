'use client';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from './api';

export const getIndustry = createAsyncThunk(
    'getIndustry',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get('/api/industry/list');
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

export const createService = createAsyncThunk(
    'createService',
    async (user_input, { rejectWithValue }) => {
        try {
            const response = await api.post('/api/business/create',user_input);
            if (response?.data?.status_code === 201) {
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

export const createServiceSteptwo = createAsyncThunk(
    'createServiceSteptwo',
    async (user_input, { rejectWithValue }) => {
        try {
            const response = await api.post('/api/service/create-service',user_input);
            if (response?.data?.status_code === 201) {
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

export const getExample = createAsyncThunk(
    'getExample',
    async ({id}, { rejectWithValue }) => {
        try {
            const response = await api.get(`/api/main/example-service-list?id=${id}`);
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

export const getDays = createAsyncThunk(
    'getDays',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get(`/api/availability/days`);
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
export const getLanguage = createAsyncThunk(
    'getLanguage',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get(`/api/main/language-list`);
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

export const getBots = createAsyncThunk(
    'getBots',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get(`/api/main/bot-list`);
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

export const stepFourAndFive = createAsyncThunk(
    'stepFourAndFive',
    async (user_input, { rejectWithValue }) => {
        try {
            const response = await api.post(`/api/bot/create-bot`,user_input);
            if (response?.data?.status_code === 201) {
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

export const stepThree = createAsyncThunk(
    'stepThree',
    async (user_input, { rejectWithValue }) => {
        try {
            const response = await api.post(`/api/availability/create-update`,user_input);
            if (response?.data?.status_code === 201) {
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


export const getAllBots = createAsyncThunk(
    'getAllBots',
    async ({page,limit}, { rejectWithValue }) => {
        try {
            const response = await api.get(`/api/bot/list?limit=${limit}&page=${page}`);
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

export const getCurrency = createAsyncThunk(
    'getCurrency',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get(`/api/currency/currency-list`);
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


const initialState={
    loading:false,
    error:false,
    industryData:[],
    createServiceData:"",
    stepTwoData:"",
    examples:[],
    days:[],
    language:[],
    bots:[],
    four_five_data:"",
    threeData:"",
    botList:[],
    currencyData:[]
}
const CreateBotSlice=createSlice({
    name:'bot',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(
            getIndustry.pending,(state)=>{
                state.loading=true
            }
        )
        .addCase(getIndustry.fulfilled,(state,{payload})=>{
            state.loading=false
            state.industryData=payload
            state.error=false
        })
        .addCase(getIndustry.rejected,(state,{payload})=>{
            state.loading=false
            state.error=payload
        })
        .addCase(createService.pending,(state)=>{
            state.loading=true
        })
        .addCase(createService.fulfilled,(state,{payload})=>{
            state.loading=false
            state.createServiceData=payload
            state.error=false
        })
        .addCase(createService.rejected,(state,{payload})=>{
            state.loading=false
            state.error=payload
        })
        .addCase(createServiceSteptwo.pending,(state)=>{
            state.loading=true
        })
        .addCase(createServiceSteptwo.fulfilled,(state,{payload})=>{
            state.loading=false
            state.stepTwoData=payload
            state.error=false
        })
        .addCase(createServiceSteptwo.rejected,(state,{payload})=>{
            state.loading=false
            state.error=payload
        })
        .addCase(getExample.pending,(state)=>{
            state.loading=true
        })
        .addCase(getExample.fulfilled,(state,{payload})=>{
            state.loading=false
            state.examples=payload
            state.error=false
        })
        .addCase(getExample.rejected,(state,{payload})=>{
            state.loading=false
            state.error=payload
        })
        .addCase(getDays.pending,(state)=>{
            state.loading=true
        })
        .addCase(getDays.fulfilled,(state,{payload})=>{
            state.loading=false
            state.days=payload
            state.error=false
        })
        .addCase(getDays.rejected,(state,{payload})=>{
            state.loading=false
            state.error=payload
        })

           .addCase(getLanguage.pending,(state)=>{
            state.loading=true
        })
        .addCase(getLanguage.fulfilled,(state,{payload})=>{
            state.loading=false
            state.language=payload
            state.error=false
        })
        .addCase(getLanguage.rejected,(state,{payload})=>{
            state.loading=false
            state.error=payload
        })
         .addCase(getBots.pending,(state)=>{
            state.loading=true
        })
        .addCase(getBots.fulfilled,(state,{payload})=>{
            state.loading=false
            state.bots=payload
            state.error=false
        })
        .addCase(getBots.rejected,(state,{payload})=>{
            state.loading=false
            state.error=payload
        })
        .addCase(stepFourAndFive.pending,(state)=>{
            state.loading=true
        })
        .addCase(stepFourAndFive.fulfilled,(state,{payload})=>{
            state.loading=false
            state.four_five_data=payload
            state.error=false
        })
        .addCase(stepFourAndFive.rejected,(state,{payload})=>{
            state.loading=false
            state.error=payload
        })

            .addCase(stepThree.pending,(state)=>{
            state.loading=true
        })
        .addCase(stepThree.fulfilled,(state,{payload})=>{
            state.loading=false
            state.threeData=payload
            state.error=false
        })
        .addCase(stepThree.rejected,(state,{payload})=>{
            state.loading=false
            state.error=payload
        })
        .addCase(getAllBots.pending,(state)=>{
            state.loading=true
        })
        .addCase(getAllBots.fulfilled,(state,{payload})=>{
            state.loading=false
            state.botList=payload
            state.error=false
        })
        .addCase(getAllBots.rejected,(state,{payload})=>{
            state.loading=false
            state.error=payload
        })
            .addCase(getCurrency.pending,(state)=>{
            state.loading=true
        })
        .addCase(getCurrency.fulfilled,(state,{payload})=>{
            state.loading=false
            state.currencyData=payload
            state.error=false
        })
        .addCase(getCurrency.rejected,(state,{payload})=>{
            state.loading=false
            state.error=payload
        })
    }
})
export default CreateBotSlice.reducer