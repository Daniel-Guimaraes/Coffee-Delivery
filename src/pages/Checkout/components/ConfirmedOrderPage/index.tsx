import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { PageContainer, DeliveryData } from './styles'
import orderImg from '../../../../assets/background-order.svg'

interface Address {
  cep?: string
  street?: string
  number?: string
  complement?: string
  neighborhood?: string
  city?: string
  state?: string
}

type ConfirmedOrderProps = {
  userAddress: Address
  paymentMethod: string
}

export function ConfirmedOrderPage({
  userAddress,
  paymentMethod,
}: ConfirmedOrderProps) {
  return (
    <PageContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <h3>Agora é só aguardar que logo o café chegara até você</h3>

        <div className="containerGradient">
          <DeliveryData>
            <div>
              <span>
                <MapPin size={22} weight="fill" />
              </span>
              <div>
                <p>
                  Entrega em{' '}
                  <strong>
                    {userAddress.street}, {userAddress.number}
                  </strong>
                </p>
                <p>
                  {userAddress.neighborhood} - {userAddress.city},{' '}
                  {userAddress.state?.toUpperCase()}
                </p>
              </div>
            </div>
            <div>
              <span>
                <Timer size={22} weight="fill" />
              </span>
              <div>
                <p>Previsão de entrega</p>
                <p>
                  <strong> 20 min - 30 min</strong>
                </p>
              </div>
            </div>
            <div>
              <span>
                <CurrencyDollar size={22} weight="fill" />
              </span>
              <div>
                <p>Pagamento na entrega</p>
                <p>
                  <strong>{paymentMethod}</strong>
                </p>
              </div>
            </div>
          </DeliveryData>
        </div>
      </div>

      <img
        src={orderImg}
        alt="ilustração de um Motoboy fazendo entregas de delivery"
      />
    </PageContainer>
  )
}
