import type { CounterValues } from "../app/App"

export const incrementAC = () => {
    return { type: 'increment' } as const
}
export const resetAC = () => {
    return { type: 'reset' } as const
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
        default:
            return state
    }
}

export type IncrementAction = ReturnType<typeof incrementAC>
export type ResetAction = ReturnType<typeof resetAC>

type Actions = IncrementAction | ResetAction