import { beforeEach, expect, test } from 'vitest'
import type { CounterValues } from '../app/App'
import { incrementAC, resetAC, saveSettingAC, valuesReducer } from './values-reducer'

let startState: CounterValues

beforeEach(() => {
    startState = { max: 5, initial: 0, current: 3 }
})

test('should increment current value when current < max', () => {
    const endState = valuesReducer(startState, incrementAC())

    expect(endState).toEqual({
        max: 5,
        initial: 0,
        current: 4,
    })
})

test('should NOT increment when current >= max', () => {
    startState = { max: 5, initial: 0, current: 5 }

    const endState = valuesReducer(startState, incrementAC())

    expect(endState).toEqual({
        max: 5,
        initial: 0,
        current: 5,
    })
})

test('should reset current value to initial ', () => {

    const endState = valuesReducer(startState, resetAC())

    expect(endState).toEqual({
        max: 5,
        initial: 0,
        current: 0,
    })
})

test('should correctly set max, initial, and current values', () => {
    const endState = valuesReducer(startState, saveSettingAC({initialValue: 2, maxSetValue: 10}))

    expect(endState).toEqual({
        max: 10,
        initial: 2,
        current: 2,
    })
})