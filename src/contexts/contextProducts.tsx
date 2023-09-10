import { ReactNode, createContext, useEffect, useReducer } from 'react'
import { toast } from 'react-toastify'
import { Product, productsReducer } from '../reducers/Products/reducer'

interface ProductContextProviderProps {
  children: ReactNode
}

interface ProductContextType {
  productList: Product[]
  removeProduct: (name: string) => void
  clearProductList: (confirmedOrder: boolean) => void
  addNewProduct: (
    id: string,
    img: string,
    name: string,
    newPrice: number,
    amountProduct: number,
    basePrice: number,
  ) => void
  handleAmountProductInTheCart: (
    amount: number,
    name: string,
    newPrice: number,
  ) => void
}

export const ProductContext = createContext({} as ProductContextType)

export function ProductContextProvider({
  children,
}: ProductContextProviderProps) {
  const [productState, dispatch] = useReducer(
    productsReducer,
    {
      productList: [],
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery: product-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return initialState
    },
  )

  const { productList } = productState

  function addNewProduct(
    id: string,
    img: string,
    name: string,
    newPrice: number,
    amountProduct: number,
    basePrice: number,
  ) {
    const existingProduct = productList.find((product) => product.name === name)

    if (existingProduct) {
      return toast.error('Esse produto já foi adicionado no carrinho')
    } else {
      const newProduct: Product = {
        id,
        img,
        name,
        newPrice,
        basePrice,
        amountProduct,
      }

      dispatch({
        type: 'ADD_NEW_PRODUCT',
        payload: { newProduct },
      })

      toast.success('Produto adicionado no carrinho!')
    }
  }

  function removeProduct(name: string) {
    dispatch({
      type: 'REMOVE_PRODUCT_LIST',
      payload: { name },
    })
  }

  function handleAmountProductInTheCart(
    amount: number,
    name: string,
    newPrice: number,
  ) {
    dispatch({
      type: 'HANDLE_AMOUNT_PRODUCT_IN_THE_CART',
      payload: { amount, name, newPrice },
    })
  }

  function clearProductList(confirmedOrder: boolean) {
    dispatch({
      type: 'CLEAR_PRODUCT_LIST',
      payload: { confirmedOrder },
    })
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(productState)

    localStorage.setItem('@coffee-delivery: product-state-1.0.0', stateJSON)
  }, [productState])

  return (
    <ProductContext.Provider
      value={{
        productList,
        addNewProduct,
        removeProduct,
        handleAmountProductInTheCart,
        clearProductList,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}
