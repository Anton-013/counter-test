import { saveSettingAC } from './values-reducer';
import type { CounterState } from "../app/App";
import { createAction, createReducer } from '@reduxjs/toolkit';

export const openSettingAC = createAction('counterState/openSetting')

const initialState: CounterState = "counter"

export const counterStateReducer = createReducer<CounterState>(initialState, (builder) => {
    builder
        .addCase(saveSettingAC, () => {
            return 'counter'
        })
        .addCase(openSettingAC, () => {
            return 'setting'
        })
})



