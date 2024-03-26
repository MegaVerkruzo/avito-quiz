export const ScoreCounter = ({
  score,
  maxScore,
}: {
  score: number
  maxScore: number
}) => {
  return (
    <div>
      Счет {score}/{maxScore}
    </div>
  )
}
