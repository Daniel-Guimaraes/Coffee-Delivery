import { css, styled } from 'styled-components'

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'colorSvgOne'
  | 'colorSvgTwo'

interface ButtonContainerProps {
  variant: ButtonVariant
  variantsvg: ButtonVariant
}

const buttonVariants = {
  primary: 'yellow-100',
  secondary: 'purple-300',
  colorSvgOne: 'yellow-300',
  colorSvgTwo: 'white',
} as const

export const ButtonContainer = styled.button<ButtonContainerProps>`
  ${(props) => css`
    background-color: ${props.theme[buttonVariants[props.variant]]};
  `}
  border: 0;
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;

  display: flex;
  align-items: center;

  svg {
    ${(props) => css`
      color: ${props.theme[buttonVariants[props.variantsvg]]};
    `}
  }

  &:hover {
    ${(props) => css`
      ${props.theme[buttonVariants[props.variant]] === buttonVariants.primary
        ? null
        : props.theme['purple-200']}
    `}
  }
`
