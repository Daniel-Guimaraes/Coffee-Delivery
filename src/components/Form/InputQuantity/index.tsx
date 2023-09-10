import { Minus, Plus } from 'phosphor-react'

import * as S from './styles'

interface InputQuantityProps {
  value: number
  onSub: () => void
  onAdd: () => void
}

export function InputQuantity({ onAdd, onSub, value }: InputQuantityProps) {
  return (
    <S.Container>
      <button type="button" onClick={onSub}>
        <Minus />
      </button>
      {value}
      <button type="button" onClick={onAdd}>
        <Plus />
      </button>
    </S.Container>
  )
}
