/* eslint-disable no-undef */
import { ButtonContainer } from './styles'

interface IButtonProps {
  title: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({ title, onClick }: IButtonProps) => {
  return <ButtonContainer onClick={onClick}>{title}</ButtonContainer>
}

export default Button
