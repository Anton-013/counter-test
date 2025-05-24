import { useEffect, useState } from "react"
import { Button } from "../Button/Button"
import { Input } from "../Input/Input"

type CounterConfigurationProps = {
    setValue: (maxValue: number, initialValue: number) => void
}

export const CounterConfiguration = ({ setValue }: CounterConfigurationProps) => {

    const [maxValue, setMaxValue] = useState<number>(0)
    const [initialValue, setInitialValue] = useState<number>(0)

    useEffect(() => {
        let maxValueLocalStorege = localStorage.getItem('maxValue')
        let initialValueLocalStorege = localStorage.getItem('initialValue')
        if ((maxValueLocalStorege) && (initialValueLocalStorege)) {
            setValue(JSON.parse(maxValueLocalStorege), JSON.parse(initialValueLocalStorege))
            setMaxValue(JSON.parse(maxValueLocalStorege))
            setInitialValue(JSON.parse(initialValueLocalStorege))
        }
    }, [])

    useEffect(() => {
    localStorage.setItem('maxValue', JSON.stringify(maxValue))
    localStorage.setItem('initialValue', JSON.stringify(initialValue))
  }, [maxValue, initialValue])

    const onClickSetHandler = () => {
        setValue(maxValue, initialValue)
    }

    const checkCondition = () => {
        return initialValue < maxValue && initialValue >= 0
    }

    const disabledButton = () => {
        return initialValue < maxValue && initialValue >= 0
    }

    return (
        <div className={'counter'}>
            <div className={'block-input'}>
                <div>
                    <span>max value</span>
                    <Input classes={maxValue > 0 ? 'input' : 'input-error'} setTitle={setMaxValue} title={maxValue} />
                    <div className={maxValue > 0 ? 'input-hint' : 'input-hint-error'}>{maxValue > 0 ? 'enter number' : 'except zero and negative numbers'}</div>
                </div>
                <div>
                    <span>start value</span>
                    <Input classes={checkCondition() ? 'input' : 'input-error'} setTitle={setInitialValue} title={initialValue} />
                    <div className={checkCondition() ? 'input-hint' : 'input-hint-error'}>{checkCondition() ? 'enter number' : 'from 0 to max value'}</div>
                </div>
            </div>
            <div className={'block-button'}>
                <Button name={'set'} onClick={onClickSetHandler} disabled={!disabledButton()} />
            </div>
        </div>
    )
}

