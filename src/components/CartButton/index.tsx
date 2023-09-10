import { ButtonContainer, ButtonVariant } from './styles'
import { ReactNode } from 'react'

interface ButtonProps {
  variant?: ButtonVariant
  variantsvg?: ButtonVariant
  children: ReactNode
  handleClick?: () => void
}

export function CartButton({
  variant = 'primary',
  variantsvg = 'colorSvgOne',
  handleClick,
  children,
}: ButtonProps) {
  return (
    <ButtonContainer
      variant={variant}
      variantsvg={variantsvg}
      onClick={handleClick}
    >
      {children}
    </ButtonContainer>
  )
}
