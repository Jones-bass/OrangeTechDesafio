import { Container } from './styles';
import gitLogo from '../assets/github.png';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import ItemRepo from '../components/ItemRepo';

export function App() {
  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="github logo" />
      <Input />
      <Button />
      <ItemRepo />
    </Container>
  );
}
