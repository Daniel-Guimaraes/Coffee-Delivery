import { Minus, Plus, Trash } from 'phosphor-react'
import { CoffeeCardContainer } from './styled'
import { ProductContext } from '../../contexts/contextProducts'
import { useContext } from 'react'

interface CoffeeCardProps {
  img: string
  name: string
  price: number
  amount: number
}

export function CoffeeCard({ img, name, price, amount }: CoffeeCardProps) {
  const { removeProduct, handleAmountProductInTheCart } =
    useContext(ProductContext)

  function handleRemoveProduct() {
    removeProduct(name)
  }

  function handleAmountSumInTheCart() {
    handleAmountProductInTheCart(amount + 1, name, price)
  }

  function handleAmountSubtractionInTheCart() {
    if (amount > 1) {
      return handleAmountProductInTheCart(amount - 1, name, price)
    }
  }

  return (
    <CoffeeCardContainer>
      <img src={img} alt="" />

      <div className="informationCoffee">
        <p>{name}</p>

        <div>
          <div className="amount">
            <button type="button" onClick={handleAmountSubtractionInTheCart}>
              <Minus />
            </button>
            {amount}
            <button type="button" onClick={handleAmountSumInTheCart}>
              <Plus />
            </button>
          </div>

          <button
            type="button"
            className="removeButton"
            onClick={handleRemoveProduct}
          >
            <Trash size={14} />
            REMOVER
          </button>
        </div>
      </div>

      <p>R${price.toFixed(2).replace('.', ',')}</p>
    </CoffeeCardContainer>
  )
}
