
import { useState } from 'react'
import './App.css'
import { Counter } from './components/Counter/Counter'
import { UncontrollableCounter } from './components/UncontrollableCounter/UncontrollableCounter'
import { CounterConfiguration } from './components/CounterConfiguration/CounterConfiguration'

function App() {

  const [maxValue, setMaxValue] = useState<number>(5)
  const [initialValue, setInitialValue] = useState<number>(0)

  return (
    <>
      <UncontrollableCounter />
      <Counter maxValue={maxValue} initialValue={initialValue} />
      <CounterConfiguration />
    </>
  )
}

export default App
