import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { CartButton } from '../CartButton'
import { useContext } from 'react'
import { ProductContext } from '../../contexts/contextProducts'

export function Header() {
  const { productList } = useContext(ProductContext)

  return (
    <HeaderContainer>
      <NavLink className="linkLogo" to="/" title="Ir para a página principal">
        <img src={logo} alt="logotipo coffee-delivery" />
      </NavLink>

      <div className="requestAndLocalization">
        <div className="localization">
          <MapPin size={22} weight="fill" />
          <p>Cassilândia, MS</p>
        </div>

        <NavLink className="cartLink" to="/checkout" title="Ver pedidos">
          <div className="buttonContainer">
            {productList.length > 0 ? (
              <div className="amountRequest">
                <p>{productList.length}</p>
              </div>
            ) : null}

            <CartButton>
              <ShoppingCart size={22} weight="fill" />
            </CartButton>
          </div>
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
