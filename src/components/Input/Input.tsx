import type { ChangeEvent } from "react"


type InputProps = {
    setTitle: (title: string) => void
    title: string
}

export const Input = ({title, setTitle}: InputProps) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return (
        <input type='number' value={title} onChange={onChangeHandler}/>
    )
}