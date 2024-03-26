export const TaskCounter = ({
  currentTaskNumber,
  maxTaskNumber,
}: {
  currentTaskNumber: number
  maxTaskNumber: number
}) => {
  return (
    <div>
      {currentTaskNumber} из {maxTaskNumber}
    </div>
  )
}
