import { combineReducers, configureStore } from "@reduxjs/toolkit";


const rootReduser = combineReducers({
//   maxValue: maxValueReducer,
//   initialValue: initialValueReducer,
//   counter: counterReducer,
//   counterState: counterStateReducer,
})

export const store = configureStore({
    reducer: rootReduser,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store
