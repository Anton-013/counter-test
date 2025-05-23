import { useState } from "react"
import { Button } from "../Button/Button"
import { Scoreboard } from "../Scoreboard/Scoreboard"

export const UncontrollableCounter = () => {

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
        <div className={'counter'}>
            <Scoreboard meaning={counter} disabledValue={counter === maxValue} />
            <div className={'block-button'}>
                <Button name={'inc'} onClick={addCounter} disabled={counter === maxValue} />
                <Button name={'reset'} onClick={resetCounter} disabled={counter === initialValue} />
                {/* <Button name={'set'} disabled/> */}
            </div>
        </div>
    )
}