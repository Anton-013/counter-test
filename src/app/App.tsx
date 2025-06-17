
import { useReducer, useState } from 'react'
import './App.css'
import { Counter } from '../components/Counter/Counter'
import { CounterConfiguration } from '../components/CounterConfiguration/CounterConfiguration'
import { incrementAC, resetAC, saveSettingAC, valuesReducer } from '../model/values-reducer'

export type CounterState = 'counter' | 'setting'
export type CounterValues = {
  max: number;
  initial: number;
  current: number;
}

function App() {

  const [values, dispatchToValues] = useReducer(valuesReducer, { max: 5, initial: 0, current: 0, })
  const [counterState, setCounterState] = useState<CounterState>('counter')

  const handlerIncrement = () => {
    if (values.current < values.max) {
      dispatchToValues(incrementAC())
    }
  }

  const handlerReset = () => {
    dispatchToValues(resetAC())
  }

  const handlerOpenSetting = () => {
    setCounterState('setting')
  }

  const handlerSaveSetting = (maxSetValue: number, initialValue: number) => {
    dispatchToValues(saveSettingAC({maxSetValue, initialValue }))
    setCounterState('counter')
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
