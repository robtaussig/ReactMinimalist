import { CounterState } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { reset } from '../app';
import { ChangeEvent } from 'react';

const INITIAL_STATE: CounterState = 0; 

const counter = createSlice({
    name: 'counter',
    initialState: INITIAL_STATE,
    reducers: {
        increment: (state) => {
            return state + 1;
        },
        decrement: (state) => {
            return Math.max(0, state - 1);
        },
        set: (_, action: PayloadAction<number>) => Math.max(0, action.payload),
    },
    extraReducers: {
        [reset.type]: () => INITIAL_STATE,
    },
});

export const {
    increment,
    decrement,
    set,
} = counter.actions;

export const { reducer } = counter;

export const selector = (state: any): CounterState => state.counter;
