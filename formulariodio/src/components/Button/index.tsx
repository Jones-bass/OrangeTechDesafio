/* eslint-disable no-undef */
import { ButtonContainer } from './styles'

interface IButtonProps {
  title: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  disabled: boolean
}

export function Button({ disabled, title, onClick }: IButtonProps) {
  return (
    <ButtonContainer disabled={disabled} onClick={onClick}>
      {title}
    </ButtonContainer>
  )
}
