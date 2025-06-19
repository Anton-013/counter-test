import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { valuesReducer } from "../model/values-reducer";
import { counterStateReducer } from "../model/counterState-reducer";


const rootReduser = combineReducers({
    values: valuesReducer,
    counterState: counterStateReducer,
})

export const store = configureStore({
    reducer: rootReduser,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store
