import Button from '../../components/Button'
import Input from '../../components/Input'
import { Container, LoginContainer, Column, Spacing, Title } from './styles'

export function Login() {
  return (
    <Container>
      <LoginContainer>
        <Column>
          <Title>Login</Title>
          <Spacing />
          <Input />
          <Spacing />
          <Input />
          <Spacing />
          <Button title="Entrar" />
        </Column>
      </LoginContainer>
    </Container>
  )
}
