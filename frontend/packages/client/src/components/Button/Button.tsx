import s from './Button.module.css'

type ButtonVariant = 'green' | 'disabled'

export const Button = ({
  text,
  onClick,
  variant = 'green',
  position = 'center',
}: {
  text: string
  variant?: ButtonVariant
  onClick?: () => void
  position?: 'center' | 'fullscreen'
}) => {
  return (
    <button
      className={s.button}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
