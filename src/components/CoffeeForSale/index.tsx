import { useState } from 'react'

import { ShoppingCart } from 'phosphor-react'

import { v4 as uuidv4 } from 'uuid'

import { InputQuantity } from '../InputQuantity'
import { CartButton } from '../CartButton'

import { Product } from '../../reducers/Products/reducer'

import { formatPrice } from '../../utils/functions'

import * as S from './styles'

interface CoffeeProps {
  product: {
    id: string
    tags: string[]
    name: string
    description: string
    price: number
    img: string
  }
  onAddToCart: (product: Product) => void
}

export function CoffeeForSale({ product, onAddToCart }: CoffeeProps) {
  const [quantity, setQuantity] = useState(0)

  function handleAdd() {
    setQuantity((state) => state + 1)
  }

  function handleSub() {
    setQuantity((state) => (state > 0 ? state - 1 : 0))
  }

  return (
    <S.CoffeeContainer>
      <img src={product.img} alt="" />

      <div className="tags">
        {product.tags.map((tag) => (
          <div className="tag" key={uuidv4()}>
            <span>{tag}</span>
          </div>
        ))}
      </div>

      <h3>{product.name}</h3>

      <p>{product.description}</p>

      <S.BuySection>
        <span className="price">
          <strong>{formatPrice(product.price)}</strong>
        </span>

        <InputQuantity onSub={handleSub} onAdd={handleAdd} value={quantity} />

        <CartButton
          variant="secondary"
          variantsvg="colorSvgTwo"
          handleClick={() => {
            setQuantity(0)
            onAddToCart({
              id: product.id,
              img: product.img,
              name: product.name,
              price: product.price,
              quantity,
            })
          }}
        >
          <ShoppingCart size={22} weight="fill" />
        </CartButton>
      </S.BuySection>
    </S.CoffeeContainer>
  )
}
