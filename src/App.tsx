
import { useState } from 'react'
import './App.css'
import { Button } from './components/Button/Button'
import { Scoreboard } from './components/Scoreboard/Scoreboard'

function App() {

  const maxValue = 5
  const initialValue = 0

  const [counter, setCount] = useState<number>(initialValue)

  const addCounter = () => {
    if (counter < maxValue) {
      setCount(counter + 1)
    }

  }

  const resetCounter = () => {
    setCount(initialValue)
  }

  return (
    <>
      <div className={'counter'}>
        <Scoreboard meaning={counter} disabledValue={counter === maxValue} />
        <div className={'block-button'}>
          <Button name={'inc'} onClick={addCounter} disabled={counter === maxValue} />
          <Button name={'reset'} onClick={resetCounter} disabled={counter === initialValue} />
          {/* <Button name={'set'} disabled/> */}
        </div>
      </div>
    </>
  )
}

export default App
