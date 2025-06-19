
import './App.css'
import { Counter } from '../components/Counter/Counter'
import { CounterConfiguration } from '../components/CounterConfiguration/CounterConfiguration'
import { incrementAC, resetAC, saveSettingAC } from '../model/values-reducer'
import { openSettingAC } from '../model/counterState-reducer'
import { useAppSelector } from '../common/hooks/useAppSelector'
import { useAppDispatch } from '../common/hooks/useAppDispatch'
import { selectValues } from '../model/values-selectors'
import { selectCounterState } from '../model/counterState-selectors'

export type CounterState = 'counter' | 'setting'
export type CounterValues = {
  max: number;
  initial: number;
  current: number;
}

function App() {

  const values = useAppSelector(selectValues)
  const counterState = useAppSelector(selectCounterState)

  const dispatch = useAppDispatch()

  const handlerIncrement = () => {
    if (values.current < values.max) {
      dispatch(incrementAC())
    }
  }

  const handlerReset = () => {
    dispatch(resetAC())
  }

  const handlerOpenSetting = () => {
    dispatch(openSettingAC())
  }

  const handlerSaveSetting = (maxSetValue: number, initialValue: number) => {
    dispatch(saveSettingAC({maxSetValue, initialValue }))
  }

  return (
    <div>
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
