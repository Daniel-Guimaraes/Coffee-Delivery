import { InputHTMLAttributes, forwardRef } from 'react'

import * as S from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...rest }: InputProps, ref) => (
    <S.Container>
      <input
        ref={ref}
        className={`${className} ${error && 'error'}`}
        {...rest}
      />
    </S.Container>
  ),
)

Input.displayName = 'Input'
