import { ScoreCounter } from './ScoreCounter'
import { TaskCounter } from './TaskCounter'

export const Header = ({
  currentTaskNumber,
  maxScore,
  maxTaskNumber,
  score,
}: {
  currentTaskNumber: number
  maxTaskNumber: number
  score: number
  maxScore: number
}) => {
  return (
    <div>
      <TaskCounter
        currentTaskNumber={currentTaskNumber}
        maxTaskNumber={maxTaskNumber}
      />
      <ScoreCounter
        score={score}
        maxScore={maxScore}
      />
    </div>
  )
}
