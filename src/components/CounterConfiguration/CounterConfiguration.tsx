import { useState } from "react"
import { Button } from "../Button/Button"
import { Input } from "../Input/Input"

type CounterConfigurationProps = {
    setValue: (maxValue: number, initialValue: number) => void
}

export const CounterConfiguration = ({ setValue }: CounterConfigurationProps) => {

    const [maxValue, setMaxValue] = useState<number>(0)
    const [initialValue, setInitialValue] = useState<number>(0)

    const onClickSetHandler = () => {
        setValue(maxValue, initialValue)
        setMaxValue(0)
        setInitialValue(0)
    }

    return (
        <div className={'counter'}>
            <div className={'block-input'}>
                <div>
                    <span>max value</span>
                    <Input setTitle={setMaxValue} title={maxValue} />
                </div>
                <div>
                    <span>start value</span>
                    <Input setTitle={setInitialValue} title={initialValue} />
                </div>
            </div>
            <div className={'block-button'}>
                <Button name={'set'} onClick={onClickSetHandler} disabled={false} />
            </div>
        </div>
    )
}

