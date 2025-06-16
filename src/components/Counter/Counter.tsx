import { Button } from "../Button/Button"
import { Scoreboard } from "../Scoreboard/Scoreboard"

export type CounterProps = {
    maxValue: number
    initialValue: number
    counter: number
    onIncrement: () => void
    onReset: () => void
    onSetting: () => void
}

export const Counter = ({ maxValue, initialValue, counter, onIncrement, onReset, onSetting }: CounterProps) => {

    return (
        <div className={'counter'}>
            <Scoreboard meaning={counter} disabledValue={counter === maxValue} />
            <div className={'block-button'}>
                <Button name={'inc'} onClick={onIncrement} disabled={counter === maxValue} />
                <Button name={'reset'} onClick={onReset} disabled={counter === initialValue} />
                <Button name={'set'} onClick={onSetting}/>
            </div>
        </div>
    )
}