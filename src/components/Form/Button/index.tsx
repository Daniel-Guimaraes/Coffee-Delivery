import { ButtonHTMLAttributes } from 'react'

import * as S from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  leftComponent?: React.ReactNode
  rightComponent?: React.ReactNode
}

export function Button({
  title,
  leftComponent,
  rightComponent,
  ...rest
}: ButtonProps) {
  return (
    <button {...rest}>
      <S.Wrapper>{leftComponent}</S.Wrapper>
      {title}
      <S.Wrapper>{rightComponent}</S.Wrapper>
    </button>
  )
}
