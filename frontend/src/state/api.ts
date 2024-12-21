import { createSlice, createAsyncThunk, configureStore } from '@reduxjs/toolkit';


// Define an async thunk for fetching data from an API
export const fetchData = createAsyncThunk('api/fetchData', async () => {
    const response = await fetch('/api/data');
    return response.json();
});

// Create a slice for the API data
const apiSlice = createSlice({
    name: 'api',
    initialState: {
        data: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

// Export the async thunk
export { fetchData };

// Export the reducer to be used in the store
export const apiReducer = apiSlice.reducer;

// Configure the store
const store = configureStore({
    reducer: {
        api: apiReducer,
    },
});

export default store;