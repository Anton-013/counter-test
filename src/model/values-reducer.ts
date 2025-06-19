import { createAction, createReducer } from "@reduxjs/toolkit"
import type { CounterValues } from "../app/App"

export const incrementAC = createAction('values/increment')
export const resetAC = createAction('values/recet')
export const saveSettingAC = createAction<{ maxSetValue: number, initialValue: number }>('valuse/saveSetting')

const initialState: CounterValues = { current: 0, initial: 0, max: 5 }

export const valuesReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(incrementAC, (state) => {
            if (state.current < state.max) {
                return {...state, current: state.current + 1} 
            }
            return state
        })
        .addCase(resetAC, (state) => {
            return {...state, current: state.initial}
        })
        .addCase(saveSettingAC, (_state, action) => {
            return {
                max: action.payload.maxSetValue,
                initial: action.payload.initialValue,
                current: action.payload.initialValue,
            }
        })
})

export type IncrementAction = ReturnType<typeof incrementAC>
export type ResetAction = ReturnType<typeof resetAC>
export type SaveSettingAction = ReturnType<typeof saveSettingAC>

type Actions = IncrementAction | ResetAction | SaveSettingAction