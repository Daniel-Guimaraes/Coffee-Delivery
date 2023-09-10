import { CoffeeForSale } from '../../components/CoffeeForSale'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import backgroundCoffee from '../../assets/background-coffee.svg'
import traditionalCoffeeImg from '../../assets/traditional-coffee.svg'
import americanCoffeeImg from '../../assets/american-coffee.svg'
import creamyCoffeeImg from '../../assets/creamy-coffee.svg'
import icedCoffeeImg from '../../assets/iced-coffee.svg'
import coffeeWithMilkImg from '../../assets/coffee-with-milk.svg'
import latteImg from '../../assets/latte.svg'
import capuchinoImg from '../../assets/capuchino.svg'
import macchiatoImg from '../../assets/macchiato.svg'
import mocaccinoImg from '../../assets/mocaccino.svg'
import hotChocolateImg from '../../assets/hot-chocolate.svg'
import cubanoImg from '../../assets/cubano.svg'
import havaianoImg from '../../assets/havaiano.svg'
import arabeCoffeeImg from '../../assets/arabe-coffee.svg'
import irishCoffeeImg from '../../assets/irish-coffee.svg'
import { v4 as uuidv4 } from 'uuid'
import { NavLink } from 'react-router-dom'
import { useCallback } from 'react'
import { toast } from 'react-toastify'

import { Product } from '../../reducers/Products/reducer'
import { useHome } from './useHome'

import * as S from './styles'

const MOCK_PRODUCTS = [
  {
    id: uuidv4(),
    img: traditionalCoffeeImg,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9,
    tags: ['TRADICIONAL'],
  },
  {
    id: uuidv4(),
    img: americanCoffeeImg,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9,
    tags: ['TRADICIONAL'],
  },
  {
    id: uuidv4(),
    img: creamyCoffeeImg,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9,
    tags: ['TRADICIONAL'],
  },
  {
    id: uuidv4(),
    img: icedCoffeeImg,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9,
    tags: ['TRADICIONAL', 'GELADO'],
  },
  {
    id: uuidv4(),
    img: coffeeWithMilkImg,
    name: 'Café com Manteiga',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9,
    tags: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    id: uuidv4(),
    img: latteImg,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9,
    tags: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    id: uuidv4(),
    img: capuchinoImg,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9,
    tags: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    id: uuidv4(),
    img: macchiatoImg,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9,
    tags: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    id: uuidv4(),
    img: mocaccinoImg,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9,
    tags: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    id: uuidv4(),
    img: hotChocolateImg,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9,
    tags: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    id: uuidv4(),
    img: cubanoImg,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9,
    tags: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    id: uuidv4(),
    img: havaianoImg,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9,
    tags: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    id: uuidv4(),
    img: arabeCoffeeImg,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9,
    tags: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    id: uuidv4(),
    img: irishCoffeeImg,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9,
    tags: ['TRADICIONAL', 'COM LEITE'],
  },
]

export function Home() {
  const { totalProductCart, addNewProduct } = useHome()

  const handleAddToCart = useCallback(
    (product: Product) => {
      if (product.quantity === 0) {
        return toast.warning('Selecione a quantidade para prosseguir')
      }

      addNewProduct(product)
    },
    [addNewProduct],
  )

  return (
    <S.HomeContainer>
      <S.BrandContainer>
        <S.BrandContent>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o coffee delivery você recebe seu café onde estiver, a qualquer
            hora do dia
          </p>

          <div>
            <S.ItemContainer>
              <span>
                <ShoppingCart weight="fill" />
              </span>
              <p>Compra simples e segura</p>
            </S.ItemContainer>
            <S.ItemContainer>
              <span>
                <Package weight="fill" />
              </span>
              <p>Embalagem mantém o café intacto</p>
            </S.ItemContainer>
            <S.ItemContainer>
              <span>
                <Timer weight="fill" />
              </span>
              <p>Entrega rápida e rastreada</p>
            </S.ItemContainer>
            <S.ItemContainer>
              <span>
                <Coffee weight="fill" />
              </span>
              <p>O café chega fresquinho até você</p>
            </S.ItemContainer>
          </div>
        </S.BrandContent>

        <img src={backgroundCoffee} alt="Imagem de um café expresso" />
      </S.BrandContainer>

      <h2>Nossos Cafés</h2>

      <S.CoffeeList>
        {MOCK_PRODUCTS.map((product) => (
          <CoffeeForSale
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </S.CoffeeList>

      <NavLink to="/checkout" className="cartButtonScroll">
        <div className="buttonContainer">
          {totalProductCart > 0 ? (
            <div className="amountProducts">
              <p>{totalProductCart}</p>
            </div>
          ) : null}
        </div>
        <ShoppingCart size={22} weight="fill" />
      </NavLink>
    </S.HomeContainer>
  )
}
