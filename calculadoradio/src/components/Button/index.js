
import { ButtonContainer } from './styles';

const Button = ({label}) => {
  return (
    <ButtonContainer type="button">
      {label}
    </ButtonContainer>
  );
}

export default Button;