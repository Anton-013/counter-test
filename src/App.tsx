
import { useState } from 'react'
import './App.css'
import { Counter } from './components/Counter/Counter'
import { UncontrollableCounter } from './components/UncontrollableCounter/UncontrollableCounter'
import { CounterConfiguration } from './components/CounterConfiguration/CounterConfiguration'

function App() {

  const [maxValue, setMaxValue] = useState<number>(5)
  const [initialValue, setInitialValue] = useState<number>(0)
  const [counter, setCount] = useState<number>(0)

  const onClickInc = () => {
    if (counter < maxValue) {
      setCount(counter + 1)
    }
  }

  const onClickReset = () => {
    setCount(initialValue)
  }

  const setValue = (maxSetValue: number, initialSetValue: number) => {
    setMaxValue(maxSetValue)
    setInitialValue(initialSetValue)
    setCount(initialSetValue)
  }

  return (
    <>
      {/* <UncontrollableCounter /> */}
      <Counter
        maxValue={maxValue}
        initialValue={initialValue}
        counter={counter}
        onClickInc={onClickInc}
        onClickReset={onClickReset}
      />
      <CounterConfiguration setValue={setValue} />
    </>
  )
}

export default App
