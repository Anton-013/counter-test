import { type SaveSettingAction } from './values-reducer';
import type { CounterState } from "../app/App";

export const openSettingAC = () => {
    return { type: 'open-setting' } as const
}

const initialState: CounterState = "counter"

export type OpenSettingAction = ReturnType<typeof openSettingAC>

type Actions = OpenSettingAction | SaveSettingAction

export const counterStateReducer = (state: CounterState = initialState, action: Actions): CounterState => {
    switch (action.type) {
        case 'open-setting': {
            return 'setting'
        }
        case 'save-setting' : {
            return 'counter'
        }
        default : 
            return state
    }
}



