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
import {
  BrandContent,
  BrandContainer,
  HomeContainer,
  ItemContainer,
  CoffeeList,
} from './styles'
import { NavLink } from 'react-router-dom'
import { ProductContext } from '../../contexts/contextProducts'
import { useContext } from 'react'

export function Home() {
  const { productList } = useContext(ProductContext)

  window.addEventListener('scroll', () => {
    const scroll: HTMLAnchorElement | null =
      document.querySelector('.cartButtonScroll')

    if (scroll) {
      scroll.classList.toggle('active', window.scrollY > 450)
    }
  })

  return (
    <HomeContainer>
      <BrandContainer>
        <BrandContent>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o coffee delivery você recebe seu café onde estiver, a qualquer
            hora do dia
          </p>

          <div>
            <ItemContainer>
              <span>
                <ShoppingCart weight="fill" />
              </span>
              <p>Compra simples e segura</p>
            </ItemContainer>
            <ItemContainer>
              <span>
                <Package weight="fill" />
              </span>
              <p>Embalagem mantém o café intacto</p>
            </ItemContainer>
            <ItemContainer>
              <span>
                <Timer weight="fill" />
              </span>
              <p>Entrega rápida e rastreada</p>
            </ItemContainer>
            <ItemContainer>
              <span>
                <Coffee weight="fill" />
              </span>
              <p>O café chega fresquinho até você</p>
            </ItemContainer>
          </div>
        </BrandContent>

        <img src={backgroundCoffee} alt="Imagem de um café expresso" />
      </BrandContainer>

      <h2>Nossos Cafés</h2>

      <CoffeeList>
        <CoffeeForSale
          id={uuidv4()}
          img={traditionalCoffeeImg}
          tags={['TRADICIONAL']}
          name="Expresso Tradicional"
          description="O tradicional café feito com água quente e grãos moídos"
          price={9}
        />

        <CoffeeForSale
          id={uuidv4()}
          img={americanCoffeeImg}
          tags={['TRADICIONAL']}
          name="Expresso Americano"
          description="Expresso diluído, menos intenso que o tradicional"
          price={9}
        />

        <CoffeeForSale
          id={uuidv4()}
          img={creamyCoffeeImg}
          tags={['TRADICIONAL']}
          name="Expresso Cremoso"
          description="Café expresso tradicional com espuma cremosa"
          price={9}
        />

        <CoffeeForSale
          id={uuidv4()}
          img={icedCoffeeImg}
          tags={['TRADICIONAL', 'GELADO']}
          name="Expresso gelado"
          description="Bebida preparada com café expresso e cubos de gelo"
          price={10}
        />

        <CoffeeForSale
          id={uuidv4()}
          img={coffeeWithMilkImg}
          tags={['TRADICIONAL', 'COM LEITE']}
          name="Café com leite"
          description="Meio a meio de expresso tradicional com leite vaporizado"
          price={12}
        />

        <CoffeeForSale
          id={uuidv4()}
          img={latteImg}
          tags={['TRADICIONAL', 'COM LEITE']}
          name="Latte"
          description="Uma dose de café expresso com o dobro de leite e espuma cremosa"
          price={12}
        />

        <CoffeeForSale
          id={uuidv4()}
          img={capuchinoImg}
          tags={['TRADICIONAL', 'COM LEITE']}
          name="Capuchino"
          description="Bebida com canela feita de doses iguais de café, leite e espuma"
          price={12}
        />

        <CoffeeForSale
          id={uuidv4()}
          img={macchiatoImg}
          tags={['TRADICIONAL', 'COM LEITE']}
          name="Macchiato"
          description="Café expresso misturado com um pouco de leite quente e espuma"
          price={12}
        />

        <CoffeeForSale
          id={uuidv4()}
          img={mocaccinoImg}
          tags={['TRADICIONAL', 'COM LEITE']}
          name="Mocaccino"
          description="Café expresso com calda de chocolate, pouco leite e espuma"
          price={12}
        />

        <CoffeeForSale
          id={uuidv4()}
          img={hotChocolateImg}
          tags={['ESPECIAL', 'COM LEITE']}
          name="Chocolate quente"
          description="Bebida feita com chocolate dissolvido no leite quente e café"
          price={12}
        />

        <CoffeeForSale
          id={uuidv4()}
          img={cubanoImg}
          tags={['ESPECIAL', 'ALCOÓLICO', 'GELADO']}
          name="Cubano"
          description="Drink gelado de café expresso com rum, creme de leite e hortelã"
          price={15}
        />

        <CoffeeForSale
          id={uuidv4()}
          img={havaianoImg}
          tags={['ESPECIAL']}
          name="Havaiano"
          description="Bebida adocicada preparada com café e leite de coco"
          price={15}
        />

        <CoffeeForSale
          id={uuidv4()}
          img={arabeCoffeeImg}
          tags={['ESPECIAL']}
          name="Árabe"
          description="Bebida preparada com grãos de café árabe e especiarias"
          price={15}
        />

        <CoffeeForSale
          id={uuidv4()}
          img={irishCoffeeImg}
          tags={['ESPECIAL', 'ALCOÓLICO']}
          name="Irlandês"
          description="Bebida a base de café, uísque irlandês, açúcar e chantilly"
          price={15}
        />
      </CoffeeList>

      <NavLink to="/checkout" className="cartButtonScroll">
        <div className="buttonContainer">
          {productList.length > 0 ? (
            <div className="amountProducts">
              <p>{productList.length}</p>
            </div>
          ) : null}
        </div>
        <ShoppingCart size={22} weight="fill" />
      </NavLink>
    </HomeContainer>
  )
}
