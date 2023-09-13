import { ReactNode, createContext, useEffect, useReducer } from 'react'

import { toast } from 'react-toastify'

import { Product, productsReducer } from '../reducers/Products/reducer'

interface ProductContextProviderProps {
  children: ReactNode
}

interface ProductContextType {
  productList: Product[]
  removeProduct: (name: string) => void
  clearProductList: () => void
  addNewProduct: (product: Product) => void
  handleAmountProductInTheCart: (id: string, quantity: number) => void
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

  function addNewProduct(product: Product) {
    const existingProduct = productList.find(
      (prod) => prod.name === product.name,
    )

    if (existingProduct) {
      return toast.error('Esse produto já foi adicionado no carrinho')
    } else {
      dispatch({
        type: 'ADD_NEW_PRODUCT',
        payload: { newProduct: product },
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

  function handleAmountProductInTheCart(id: string, quantity: number) {
    dispatch({
      type: 'HANDLE_AMOUNT_PRODUCT_IN_THE_CART',
      payload: { quantity, id },
    })
  }

  function clearProductList() {
    dispatch({
      type: 'CLEAR_PRODUCT_LIST',
      payload: { confirmedOrder: true },
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
