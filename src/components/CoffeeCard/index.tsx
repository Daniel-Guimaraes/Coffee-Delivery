import { Trash } from 'phosphor-react'
import { CoffeeCardContainer } from './styled'
import { ProductContext } from '../../contexts/contextProducts'
import { useContext } from 'react'
import { InputQuantity } from '../Form/InputQuantity'
import { formatPrice } from '../../util/functions'

interface CoffeeCardProps {
  product: {
    id: string
    img: string
    name: string
    price: number
    quantity: number
  }
}

export function CoffeeCard({ product }: CoffeeCardProps) {
  const { removeProduct, handleAmountProductInTheCart } =
    useContext(ProductContext)

  const price = formatPrice(product.price * product.quantity)

  function handleRemoveProduct() {
    removeProduct(product.name)
  }

  function handleAdd() {
    handleAmountProductInTheCart(product.id, product.quantity + 1)
  }

  function handleSub() {
    handleAmountProductInTheCart(product.id, product.quantity - 1)
  }

  return (
    <CoffeeCardContainer>
      <img src={product.img} alt="" />

      <div className="informationCoffee">
        <p>{product.name}</p>

        <div>
          <InputQuantity
            onSub={handleSub}
            onAdd={handleAdd}
            value={product.quantity}
          />

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

      <p>{price}</p>
    </CoffeeCardContainer>
  )
}
