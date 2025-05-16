

type ScoreboardProps = {
    meaning: number
    disabledValue: boolean
}

export const Scoreboard = ({ meaning, disabledValue }: ScoreboardProps) => {
    return (
        <div className={disabledValue ? 'scoreboard-error' : 'scoreboard'}>
            {meaning}
        </div>
    )
}