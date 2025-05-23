import { useState } from "react"
import { Button } from "../Button/Button"
import { Input } from "../Input/Input"

type CounterConfigurationProps = {
    setValue: (maxValue: string, initialValue: string) => void
}

export const CounterConfiguration = ({setValue}: CounterConfigurationProps) => {

    const [maxValue, setMaxValue] = useState<string>('')
    const [initialValue, setInitialValue] = useState<string>('')

    const onClickSetHandler = () => {
        setValue(maxValue, initialValue)
        setMaxValue('')
        setInitialValue('')
    }

    return (
        <div className={'counter'}>
            <div className={'block-input'}>
                <div>
                    <span>max value</span>
                    <Input setTitle={setMaxValue} title={maxValue}/>
                </div>
                <div>
                    <span>start value</span>
                    <Input setTitle={setInitialValue} title={initialValue}/>
                </div>
            </div>
            <div className={'block-button'}>
                <Button name={'set'} onClick={onClickSetHandler} disabled={false} />
            </div>
        </div>
    )
}

