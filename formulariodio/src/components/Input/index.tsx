import { Controller, Control } from 'react-hook-form'

import { IFormLogin } from '../../pages/Login/types'

import { InputContainer, ErrorMessage } from './styles'

// eslint-disable-next-line no-undef
interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  control: Control<IFormLogin, any>
  name: 'email' | 'password'
  errorMessage?: string
}

export function Input({ control, errorMessage, name, ...rest }: IInputProps) {
  return (
    <>
      <InputContainer>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <input
              {...rest}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              ref={ref}
            />
          )}
        />
      </InputContainer>
      {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
    </>
  )
}
