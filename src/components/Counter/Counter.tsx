import { Button } from "../Button/Button"
import { Scoreboard } from "../Scoreboard/Scoreboard"

export type CounterProps = {
    maxValue: number
    initialValue: number
    counter: number
    onClickInc: () => void
    onClickReset: () => void
    onClickSet: () => void
}

export const Counter = ({ maxValue, initialValue, counter, onClickInc, onClickReset, onClickSet }: CounterProps) => {

    return (
        <div className={'counter'}>
            <Scoreboard meaning={counter} disabledValue={counter === maxValue} />
            <div className={'block-button'}>
                <Button name={'inc'} onClick={onClickInc} disabled={counter === maxValue} />
                <Button name={'reset'} onClick={onClickReset} disabled={counter === initialValue} />
                <Button name={'set'} onClick={onClickSet}/>
            </div>
        </div>
    )
}