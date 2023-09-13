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
      <div className="amount">
        <button onClick={onSub}>
          <Minus />
        </button>
        {value}
        <button onClick={onAdd}>
          <Plus />
        </button>
      </div>
    </S.Container>
  )
}
