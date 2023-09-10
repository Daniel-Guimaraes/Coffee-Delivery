import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { BuySection, CoffeeContainer } from './styles'
import { CartButton } from '../CartButton'
import { v4 as uuidv4 } from 'uuid'
import { useContext, useState } from 'react'
import { ProductContext } from '../../contexts/contextProducts'
import { toast } from 'react-toastify'

interface CoffeeProps {
  id: string
  tags: string[]
  name: string
  description: string
  price: number
  img: string
}

export function CoffeeForSale({
  id,
  img,
  tags,
  name,
  description,
  price,
}: CoffeeProps) {
  const { addNewProduct } = useContext(ProductContext)
  const [amountProduct, setAmountProduct] = useState<number>(0)

  function handleAmountAdd() {
    setAmountProduct((state) => state + 1)
  }

  function handleAmountSub() {
    if (amountProduct > 0) {
      setAmountProduct((state) => state - 1)
    } else {
      setAmountProduct(0)
    }
  }

  function handleAddToCart() {
    if (amountProduct > 0) {
      const basePrice = price
      const newPrice = amountProduct * price

      addNewProduct(id, img, name, newPrice, amountProduct, basePrice)
      setAmountProduct(0)
    } else {
      return toast.warning('Selecione a quantidade para prosseguir')
    }
  }

  return (
    <CoffeeContainer>
      <img src={img} alt="" />

      <div className="tags">
        {tags.map((tag) => (
          <div className="tag" key={uuidv4()}>
            <span>{tag}</span>
          </div>
        ))}
      </div>

      <h3>{name}</h3>

      <p>{description}</p>

      <BuySection>
        <span className="price">
          R$
          <strong>{price.toFixed(2).replace('.', ',')}</strong>
        </span>

        <div className="amount">
          <button onClick={handleAmountSub}>
            <Minus />
          </button>
          {amountProduct}
          <button onClick={handleAmountAdd}>
            <Plus />
          </button>
        </div>

        <CartButton
          variant="secondary"
          variantsvg="colorSvgTwo"
          handleClick={handleAddToCart}
        >
          <ShoppingCart size={22} weight="fill" />
        </CartButton>
      </BuySection>
    </CoffeeContainer>
  )
}
