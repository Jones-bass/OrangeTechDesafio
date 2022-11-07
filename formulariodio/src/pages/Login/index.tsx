import { useForm } from 'react-hook-form'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Container, LoginContainer, Column, Spacing, Title } from './styles'
import { IFormLogin } from './types'

export function Login() {
  const { watch, control } = useForm<IFormLogin>()

  return (
    <Container>
      <LoginContainer>
        <Column>
          <Title>Login</Title>
          <Spacing />
          <Input name="email" placeholder="Email" control={control} />
          <Spacing />
          <Input name="email" placeholder="Email" control={control} />
          <Spacing />
          <Button title="Entrar" />
        </Column>
      </LoginContainer>
    </Container>
  )
}
