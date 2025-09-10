'use client';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from './api';



export const updateService = createAsyncThunk(
    'updateService',
    async (user_input, { rejectWithValue }) => {
        try {
            const response = await api.post('/api/business/update-business-details',user_input);
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

export const editService = createAsyncThunk(
    'editService',
    async (user_input, { rejectWithValue }) => {
        try {
            const response = await api.post('/api/business/get-business-details',user_input);
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


export const editStepTwo = createAsyncThunk(
    'editStepTwo',
    async (user_input, { rejectWithValue }) => {
        try {
            const response = await api.post('/api/service/get-services',user_input);
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


export const updateStepTwo = createAsyncThunk(
    'updateStepTwo',
    async (user_input, { rejectWithValue }) => {
        try {
            const response = await api.post('/api/service/create-update-service',user_input);
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

export const EditStepFourAndFive = createAsyncThunk(
    'EditStepFourAndFive',
    async (user_input, { rejectWithValue }) => {
        try {
            const response = await api.post(`/api/bot-data/make-bot-edit`,user_input);
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

export const updateStepFourAndFive = createAsyncThunk(
    'updateStepFourAndFive',
    async (user_input, { rejectWithValue }) => {
        try {
            const response = await api.post(`/api/bot-data/update-bot`,user_input);
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

export const EditStepThree = createAsyncThunk(
    'EditStepThree',
    async (user_input, { rejectWithValue }) => {
        try {
            const response = await api.post(`/api/availability/get-availability`,user_input);
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

export const updateStepThree = createAsyncThunk(
    'updateStepThree',
    async (user_input, { rejectWithValue }) => {
        try {
            const response = await api.post(`/api/availability/create-update`,user_input);
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

export const getCurrencyOut = createAsyncThunk(
    'getCurrencyOut',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get(`/api/currency/list`);
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

export const getPlans = createAsyncThunk(
    'getPlans',
    async (user_input, { rejectWithValue }) => {
        try {
            const response = await api.post(`/api/plans/get-plans`,user_input);
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

export const getBotCount = createAsyncThunk(
    'getBotCount',
    async (user_input, { rejectWithValue }) => {
        try {
            const response = await api.get(`/api/count/bot-count-user`,user_input);
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
export const editStepSix = createAsyncThunk(
    'editStepSix',
    async (user_input, { rejectWithValue }) => {
        try {
            const response = await api.post(`/api/bot-data/checkout`,user_input);
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
    updateServiceData:"",
    editSerViceData:{},
    editStepTwoData:{},
    updateStepTwoData:{},
    updateStepThreeData:{},
    stepTwoData:"",
    examples:[],
    days:[],
    language:[],
    bots:[],
    editfour_five_data:{},
    updatefour_five_data:{},
    updateThreeData:"",
    botList:[],
    currencyData:[],
    currencyOut:[],
    selectedCurrency: null,
    planList:[],
    countBot:{},
    editstepSixData:{}
}
const EditBotSlice=createSlice({
    name:'botE',
    initialState,
    reducers:{
        setSelectedCurrency: (state, action) => {
      state.selectedCurrency = action.payload;
    },
    },
    extraReducers:(builder)=>{
        builder
        .addCase(updateService.pending,(state)=>{
            state.loading=true
        })
        .addCase(updateService.fulfilled,(state,{payload})=>{
            state.loading=false
            state.updateServiceData=payload
            state.error=false
        })
        .addCase(updateService.rejected,(state,{payload})=>{
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
        .addCase(EditStepFourAndFive.pending,(state)=>{
            state.loading=true
        })
        .addCase(EditStepFourAndFive.fulfilled,(state,{payload})=>{
            state.loading=false
            state.editfour_five_data=payload
            state.error=false
        })
        .addCase(EditStepFourAndFive.rejected,(state,{payload})=>{
            state.loading=false
            state.error=payload
        })

            .addCase(EditStepThree.pending,(state)=>{
            state.loading=true
        })
        .addCase(EditStepThree.fulfilled,(state,{payload})=>{
            state.loading=false
            state.updateThreeData=payload
            state.error=false
        })
        .addCase(EditStepThree.rejected,(state,{payload})=>{
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
             .addCase(getCurrencyOut.pending,(state)=>{
            state.loading=true
        })
        .addCase(getCurrencyOut.fulfilled,(state,{payload})=>{
            state.loading=false
            state.currencyOut=payload
            state.error=false
        })
        .addCase(getCurrencyOut.rejected,(state,{payload})=>{
            state.loading=false
            state.error=payload
        })
        .addCase(getPlans.pending,(state)=>{
            state.loading=true
        })
        .addCase(getPlans.fulfilled,(state,{payload})=>{
            state.loading=false
            state.planList=payload
            state.error=false
        })
        .addCase(getPlans.rejected,(state,{payload})=>{
            state.loading=false
            state.error=payload
        })
        .addCase(getBotCount.pending,(state)=>{
            state.loading=true
        })
        .addCase(getBotCount.fulfilled,(state,{payload})=>{
            state.loading=false
            state.countBot=payload
            state.error=false
        })
        .addCase(getBotCount.rejected,(state,{payload})=>{
            state.loading=false
            state.error=payload
        })
        .addCase(editService.pending,(state)=>{
            state.loading=true
        })
        .addCase(editService.fulfilled,(state,{payload})=>{
            state.loading=false
            state.editSerViceData=payload
            console.log("editSerViceDataPayload",payload);
            
            state.error=false
        })
        .addCase(editService.rejected,(state,{payload})=>{
            state.loading=false
            state.error=payload
        })
         .addCase(editStepTwo.pending,(state)=>{
            state.loading=true
        })
        .addCase(editStepTwo.fulfilled,(state,{payload})=>{
            state.loading=false
            state.editStepTwoData=payload
            console.log("editSerViceDataPayload",payload);
            
            state.error=false
        })
        .addCase(editStepTwo.rejected,(state,{payload})=>{
            state.loading=false
            state.error=payload
        })
            .addCase(updateStepTwo.pending,(state)=>{
            state.loading=true
        })
        .addCase(updateStepTwo.fulfilled,(state,{payload})=>{
            state.loading=false
            state.updateStepTwoData=payload
            state.error=false
        })
        .addCase(updateStepTwo.rejected,(state,{payload})=>{
            state.loading=false
            state.error=payload
        })
           .addCase(updateStepThree.pending,(state)=>{
            state.loading=true
        })
        .addCase(updateStepThree.fulfilled,(state,{payload})=>{
            state.loading=false
            state.updateStepThreeData=payload
            state.error=false
        })
        .addCase(updateStepThree.rejected,(state,{payload})=>{
            state.loading=false
            state.error=payload
        })
         .addCase(updateStepFourAndFive.pending,(state)=>{
            state.loading=true
        })
        .addCase(updateStepFourAndFive.fulfilled,(state,{payload})=>{
            state.loading=false
            state.updatefour_five_data=payload
            state.error=false
        })
        .addCase(updateStepFourAndFive.rejected,(state,{payload})=>{
            state.loading=false
            state.error=payload
        })
          .addCase(editStepSix.pending,(state)=>{
            state.loading=true
        })
        .addCase(editStepSix.fulfilled,(state,{payload})=>{
            state.loading=false
            state.editstepSixData=payload
            state.error=false
        })
        .addCase(editStepSix.rejected,(state,{payload})=>{
            state.loading=false
            state.error=payload
        })
    }
})
export const { setSelectedCurrency } = EditBotSlice.actions;
export default EditBotSlice.reducer