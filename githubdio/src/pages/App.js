import { Container } from './styles';
import gitLogo from '../assets/github.png';

export function App() {
  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="github logo" />
    </Container>
  );
}
