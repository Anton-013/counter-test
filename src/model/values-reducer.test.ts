import { expect, test } from 'vitest'
import type { CounterValues } from '../app/App'
import { incrementAC, resetAC, valuesReducer } from './values-reducer'

test('should increment current value when current < max', () => {
    const startState: CounterValues = {max: 5, initial: 0, current: 3}

    const endState = valuesReducer(startState, incrementAC())

    expect(endState).toEqual({
        max: 5,
        initial: 0,
        current: 4,
    })
})

test('should NOT increment when current >= max', () => {
    const startState: CounterValues = {max: 5, initial: 0, current: 5}

    const endState = valuesReducer(startState, incrementAC())

    expect(endState).toEqual({
        max: 5,
        initial: 0,
        current: 5,
    })
})

test('should reset current value to initial ', () => {
    const startState: CounterValues = {max: 5, initial: 0, current: 3}

    const endState = valuesReducer(startState, resetAC())

    expect(endState).toEqual({
        max: 5,
        initial: 0,
        current: 0,
    })
})
