import type { ChangeEvent } from "react"


type InputProps = {
    setTitle: (title: number) => void
    title: number
}

export const Input = ({title, setTitle}: InputProps) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(Number(e.currentTarget.value))
    }

    return (
        <input type='number' value={String(title)} onChange={onChangeHandler}/>
    )
}