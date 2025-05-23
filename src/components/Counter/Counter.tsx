import { useState } from "react"
import { Button } from "../Button/Button"
import { Scoreboard } from "../Scoreboard/Scoreboard"

export type CounterProps = {
    maxValue: number
    initialValue: number
    counter: number
    onClickInc: () => void
    onClickReset: () => void
}

export const Counter = ({ maxValue, initialValue, counter, onClickInc, onClickReset }: CounterProps) => {

    return (
        <div className={'counter'}>
            <Scoreboard meaning={counter} disabledValue={counter === maxValue} />
            <div className={'block-button'}>
                <Button name={'inc'} onClick={onClickInc} disabled={counter === maxValue} />
                <Button name={'reset'} onClick={onClickReset} disabled={counter === initialValue} />
            </div>
        </div>
    )
}