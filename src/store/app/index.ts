import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const app = createSlice({
    name: 'app',
    initialState: null,
    reducers: {
        reset: state => state,
    },
    extraReducers: {},
});

export const {
    reset,
} = app.actions;

export const { reducer } = app;
