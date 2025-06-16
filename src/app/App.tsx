
import { useState } from 'react'
import './App.css'
import { Counter } from '../components/Counter/Counter'
import { CounterConfiguration } from '../components/CounterConfiguration/CounterConfiguration'

function App() {

  const [maxValue, setMaxValue] = useState<number>(5)
  const [initialValue, setInitialValue] = useState<number>(0)
  const [counter, setCount] = useState<number>(0)
  const [counterState, setCounterState] = useState<'counter' | 'setting'>('counter')

  const onClickInc = () => {
    if (counter < maxValue) {
      setCount(counter + 1)
    }
  }

  const onClickReset = () => {
    setCount(initialValue)
  }

  const onClickSet = () => {
    setCounterState('setting')
  }

  const setValue = (maxSetValue: number, initialSetValue: number) => {
    setMaxValue(maxSetValue)
    setInitialValue(initialSetValue)
    setCount(initialSetValue)
    setCounterState('counter')
  }

  return (
    <>
      {/* <UncontrollableCounter /> */}
      {counterState === 'counter'
        ? <Counter
          maxValue={maxValue}
          initialValue={initialValue}
          counter={counter}
          onClickInc={onClickInc}
          onClickReset={onClickReset}
          onClickSet={onClickSet} />
        : <CounterConfiguration setValue={setValue} />}
    </>
  )
}

export default App
