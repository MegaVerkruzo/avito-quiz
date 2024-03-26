import { Button } from '../Button/Button'

export const PinCode = ({ onSubmit }: { onSubmit: () => void }) => {
  return (
    <div>
      <input type="number" />
      <input type="number" />
      <input type="number" />
      <input type="number" />
      <Button
        text="Войти"
        onClick={onSubmit}
      />
    </div>
  )
}
