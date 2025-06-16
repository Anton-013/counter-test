
import { useState } from 'react'
import './App.css'
import { Counter } from '../components/Counter/Counter'
import { CounterConfiguration } from '../components/CounterConfiguration/CounterConfiguration'

export type CounterState = 'counter' | 'setting'
export type CounterValues = {
  max: number;
  initial: number;
  current: number;
}

function App() {

  const [values, setValues] = useState<CounterValues>({ max: 5, initial: 0, current: 0, })

  // const [maxValue, setMaxValue] = useState<number>(5)
  // const [initialValue, setInitialValue] = useState<number>(0)
  // const [counter, setCount] = useState<number>(0)
  const [counterState, setCounterState] = useState<CounterState>('counter')

  const handlerIncrement = () => {
    if (values.current < values.max) {
      setValues(prev => ({ ...prev, current: prev.current + 1 }))
    }
  }

  const handlerReset = () => {
    setValues(prev => ({ ...prev, current: prev.initial }))
  }

  const handlerOpenSetting = () => {
    setCounterState('setting')
  }

  const handlerSaveSetting = (maxSetValue: number, initialValue: number) => {
    setValues({ max: maxSetValue, initial: initialValue, current: initialValue, })
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
