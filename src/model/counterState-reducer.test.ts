import { expect, test } from "vitest"
import type { CounterState } from "../app/App"
import { counterStateReducer, openSettingAC } from "./counterState-reducer"
import { saveSettingAC } from "./values-reducer"


test('the value should be setting', () => {
    let statrState: CounterState = 'counter'

    const endState = counterStateReducer(statrState, openSettingAC())

    expect(endState).toBe('setting')
})

test('the value should be counter', () => {
    let statrState: CounterState = 'setting'

    const endState = counterStateReducer(statrState, saveSettingAC({initialValue: 2, maxSetValue: 10}))

    expect(endState).toBe('counter')
})