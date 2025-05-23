import type { ChangeEvent } from "react"


type InputProps = {
    classes: string
    setTitle: (title: number) => void
    title: number
}

export const Input = ({ classes, title, setTitle }: InputProps) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(Number(e.currentTarget.value))
    }

    return (
        <>
            <input className={classes} type='number' value={String(title)} onChange={onChangeHandler} />
        </>
    )
}