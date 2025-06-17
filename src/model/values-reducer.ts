import type { CounterValues } from "../app/App"

export const incrementAC = () => {
    return { type: 'increment' } as const
}
export const resetAC = () => {
    return { type: 'reset' } as const
}
export const saveSettingAC = ({maxSetValue, initialValue} : {maxSetValue: number, initialValue: number}) => {
    return { type: 'save-setting', payload: { maxSetValue, initialValue } }
}

const initialState: CounterValues = { current: 0, initial: 0, max: 5 }

export const valuesReducer = (state: CounterValues = initialState, action: Actions): CounterValues => {
    switch (action.type) {
        case 'increment': {
            return state.current < state.max
                ? { ...state, current: state.current + 1 }
                : state
        }
        case 'reset': {
            return { ...state, current: state.initial }
        }
        case 'save-setting': {
            return { max: action.payload.maxSetValue, current: action.payload.initialValue, initial: action.payload.initialValue }
        }
        default:
            return state
    }
}

export type IncrementAction = ReturnType<typeof incrementAC>
export type ResetAction = ReturnType<typeof resetAC>
export type SaveSettingAction = ReturnType<typeof saveSettingAC>

type Actions = IncrementAction | ResetAction | SaveSettingAction