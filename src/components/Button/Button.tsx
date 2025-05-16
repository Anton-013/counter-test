

type ButtonProps = {
    name: string
    onClick?: () => void
    disabled?: boolean
}

export const Button = ({name, onClick, disabled}: ButtonProps) => {
    return (
        <button className={disabled ? "button-disabled" : "button"} onClick={onClick} disabled={disabled}>{name}</button>
    )
}