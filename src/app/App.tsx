
import { useReducer } from 'react'
import './App.css'
import { Counter } from '../components/Counter/Counter'
import { CounterConfiguration } from '../components/CounterConfiguration/CounterConfiguration'
import { incrementAC, resetAC, saveSettingAC, valuesReducer } from '../model/values-reducer'
import { counterStateReducer, openSettingAC } from '../model/counterState-reducer'

export type CounterState = 'counter' | 'setting'
export type CounterValues = {
  max: number;
  initial: number;
  current: number;
}

function App() {

  const [values, dispatchToValues] = useReducer(valuesReducer, { max: 5, initial: 0, current: 0, })
  const [counterState, dispatchToCounterState] = useReducer(counterStateReducer, 'counter')

  const handlerIncrement = () => {
    if (values.current < values.max) {
      dispatchToValues(incrementAC())
    }
  }

  const handlerReset = () => {
    dispatchToValues(resetAC())
  }

  const handlerOpenSetting = () => {
    dispatchToCounterState(openSettingAC())
  }

  const handlerSaveSetting = (maxSetValue: number, initialValue: number) => {
    dispatchToValues(saveSettingAC({maxSetValue, initialValue }))
    dispatchToCounterState(saveSettingAC({maxSetValue, initialValue }))
  }

  return (
    <div>
      {/* <UncontrollableCounter /> */}
      {counterState === 'counter' ? (
        <Counter
          maxValue={values.max}
          initialValue={values.initial}
          counter={values.current}
          onIncrement={handlerIncrement}
          onReset={handlerReset}
          onSetting={handlerOpenSetting}
        />
      ) : (
        <CounterConfiguration
          onSave={handlerSaveSetting}
          initialMaxValue={values.max}
          initialStartValue={values.initial}
        />
      )}
    </div>
  )
}

export default App
