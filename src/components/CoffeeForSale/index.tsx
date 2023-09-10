import { useState } from 'react'

import { ShoppingCart } from 'phosphor-react'
import { BuySection, CoffeeContainer } from './styles'
import { CartButton } from '../CartButton'
import { v4 as uuidv4 } from 'uuid'
import { InputQuantity } from '../Form/InputQuantity'
import { Product } from '../../reducers/Products/reducer'

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
    setQuantity((prevState) => prevState + 1)
  }

  function handleSub() {
    setQuantity((prevState) => (prevState > 0 ? prevState - 1 : 0))
  }

  return (
    <CoffeeContainer>
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

      <BuySection>
        <span className="price">
          R$
          <strong>{product.price.toFixed(2).replace('.', ',')}</strong>
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
      </BuySection>
    </CoffeeContainer>
  )
}
