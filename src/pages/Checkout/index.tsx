import { useContext, useState } from 'react'

import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import {
  Bank,
  CurrencyDollar,
  MapPin,
  CreditCard,
  Money,
  SmileySad,
} from 'phosphor-react'

import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { ConfirmedOrderPage } from './components/ConfirmedOrderPage'
import { CoffeeCard } from '../../components/CoffeeCard'

import { ProductContext } from '../../contexts/contextProducts'

import {
  CheckoutContainer,
  FormData,
  FormDataContainer,
  InformationContainer,
  PaymentDataContainer,
  SelectedCoffees,
} from './styles'
import { Input } from '../../components/Form/Input'
import { Button } from '../../components/Form/Button'
import { formatPrice } from '../../util/functions'

const createFormValidationSchema = z.object({
  cep: z.string().nonempty('Informe o CEP!'),
  street: z.string().nonempty('Informe o nome da rua!'),
  number: z.string().nonempty('Informe o número da sua residência'),
  complement: z.string(),
  neighborhood: z
    .string()
    .nonempty('Informe o nome do bairro que você reside!'),
  city: z.string().nonempty('Informe o nome da cidade que vc reside'),
  state: z
    .string()
    .min(1, 'Informe a sigla do estado que você reside')
    .max(2, 'A sigla deve conter somente 2 caracteres'),
})

const TAX = 3.5

type FormData = z.infer<typeof createFormValidationSchema>

interface Address {
  cep?: string
  street?: string
  number?: string
  complement?: string
  neighborhood?: string
  city?: string
  state?: string
}

export function Checkout() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('')
  const [userAddress, setUserAddress] = useState({})
  const [confirmedOrder, setConfirmedOrder] = useState(false)

  const { productList, clearProductList } = useContext(ProductContext)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(createFormValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      complement: '',
      neighborhood: '',
      city: '',
      number: '',
      state: '',
    },
  })

  const totalPriceOfProducts: number = productList.reduce(
    (accumulator, product) => {
      return accumulator + product.price * product.quantity
    },
    0,
  )

  const totalItens = formatPrice(totalPriceOfProducts)
  const deliveryPrice = formatPrice(totalPriceOfProducts > 0 ? TAX : 0)
  const total = formatPrice(
    totalPriceOfProducts > 0 ? totalPriceOfProducts + TAX : 0,
  )

  function handlePaymentMethod(method: string) {
    setSelectedPaymentMethod(method)
  }

  function handleCreateOrder(data: FormData) {
    if (selectedPaymentMethod.length === 0) {
      return toast.warn('Selecione a forma de pagamento', {
        position: 'top-center',
      })
    } else {
      const addressData: Address = {
        cep: data.cep,
        street: data.street,
        complement: data.complement,
        number: data.number,
        neighborhood: data.neighborhood,
        city: data.city,
        state: data.state,
      }

      setUserAddress(addressData)
      clearProductList()
      reset()
      setConfirmedOrder(true)
    }
  }

  if (confirmedOrder) {
    return (
      <CheckoutContainer>
        <ConfirmedOrderPage
          userAddress={userAddress}
          paymentMethod={selectedPaymentMethod}
        />
      </CheckoutContainer>
    )
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleCreateOrder)}>
        <FormData>
          <h3>Complete seu pedido</h3>

          <FormDataContainer>
            <InformationContainer>
              <MapPin size={22} color="#C47F17" />
              <div className="information">
                <p>Endereço da Entrega</p>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </InformationContainer>

            <div className="inputsContainer">
              <Input
                {...register('cep')}
                className="inputCEP"
                type="text"
                placeholder="CEP"
                title="Informe o CEP da sua região"
                error={errors.cep?.message}
              />
              {/* <input
                className="inputCEP"
                type="text"
                placeholder="CEP"
                title="Informe o CEP da sua região"
                {...register('cep')}
              />
              {errors.cep && (
                <span className="errorsMessage">{errors.cep.message}</span>
              )} */}

              <input
                type="text"
                placeholder="Rua"
                title="Informe o nome da sua rua"
                {...register('street')}
              />
              {errors.street && (
                <span className="errorsMessage">{errors.street.message}</span>
              )}

              <div className="numberAndComplementInput">
                <div>
                  <input
                    type="text"
                    placeholder="Número"
                    title="Informe o número da sua residencia"
                    {...register('number')}
                  />
                  {errors.number && (
                    <span className="errorsMessage">
                      {errors.number.message}
                    </span>
                  )}
                </div>

                <input
                  className="complementInput"
                  type="text"
                  id="complement"
                  placeholder="Complemento"
                  title="Informe algum complemento que ajude na localização"
                  {...register('complement')}
                />
                <label htmlFor="complement">opcional</label>
              </div>

              <div className="localizationInputs">
                <div>
                  <input
                    type="text"
                    placeholder="Bairro"
                    title="Informe o bairro da sua residencia"
                    {...register('neighborhood')}
                  />
                  {errors.neighborhood && (
                    <span className="errorsMessage">
                      {errors.neighborhood.message}
                    </span>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Cidade"
                    title="Informe o nome da cidade"
                    {...register('city')}
                  />
                  {errors.city && (
                    <span className="errorsMessage">{errors.city.message}</span>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="UF"
                    title="Informe a sigla do seu estado"
                    {...register('state')}
                  />
                  {errors.state && (
                    <span className="errorsMessage">
                      {errors.state.message}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </FormDataContainer>
        </FormData>

        <PaymentDataContainer>
          <InformationContainer>
            <CurrencyDollar size={22} color="#8047F8" />
            <div className="information">
              <p>Pagamento</p>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </InformationContainer>

          <div className="paymentMethods">
            <button
              type="button"
              className={
                selectedPaymentMethod === 'Cartão de débito' ? `active` : `none`
              }
              onClick={() => handlePaymentMethod('Cartão de débito')}
            >
              <Bank size={16} />
              CARTÃO DE DÉBITO
            </button>

            <button
              type="button"
              className={
                selectedPaymentMethod === 'Cartão de crédito'
                  ? `active`
                  : `none`
              }
              onClick={() => handlePaymentMethod('Cartão de crédito')}
            >
              <CreditCard size={16} />
              CARTÃO DE CRÉDITO
            </button>

            <button
              type="button"
              className={
                selectedPaymentMethod === 'Dinheiro' ? `active` : `none`
              }
              onClick={() => handlePaymentMethod('Dinheiro')}
            >
              <Money size={16} />
              DINHEIRO
            </button>
          </div>
        </PaymentDataContainer>

        <SelectedCoffees>
          <h2>Cafés selecionados</h2>

          <div className="containerOfSelectedCoffees">
            {productList.length > 0 ? (
              productList.map((product) => (
                <CoffeeCard key={product.id} product={product} />
              ))
            ) : (
              <div className="emptyListMessage">
                <h3>Você ainda não selecionou nenhum produto</h3>
                <SmileySad size={50} />
              </div>
            )}

            <div className="priceInformationContainer">
              <div>
                <p>Total de itens</p>
                <p>{totalItens}</p>
              </div>

              <div>
                <p>Entrega</p>
                <p>{deliveryPrice}</p>
              </div>

              <div>
                <strong>Total</strong>
                <strong>{total}</strong>
              </div>
            </div>

            <Button title="CONFIRMAR PEDIDO" />
          </div>
        </SelectedCoffees>
      </form>
    </CheckoutContainer>
  )
}
