export interface Product {
  id: string
  img: string
  name: string
  newPrice: number
  amountProduct: number
  basePrice: number
}

interface ProductState {
  productList: Product[]
}

type ProductAction =
  | { type: 'ADD_NEW_PRODUCT'; payload: { newProduct: Product } }
  | { type: 'REMOVE_PRODUCT_LIST'; payload: { name: string } }
  | {
      type: 'HANDLE_AMOUNT_PRODUCT_IN_THE_CART'
      payload: { amount: number; name: string; newPrice: number }
    }
  | { type: 'CLEAR_PRODUCT_LIST'; payload: { confirmedOrder: boolean } }

export function productsReducer(state: ProductState, action: ProductAction) {
  switch (action.type) {
    case 'ADD_NEW_PRODUCT':
      return {
        ...state,
        productList: [...state.productList, action.payload.newProduct],
      }

    case 'REMOVE_PRODUCT_LIST':
      return {
        ...state,
        productList: state.productList.filter(
          (product) => product.name !== action.payload.name,
        ),
      }

    case 'HANDLE_AMOUNT_PRODUCT_IN_THE_CART':
      return {
        ...state,
        productList: state.productList.map((product) => {
          if (product.name === action.payload.name) {
            const newBasePrice = action.payload.amount * product.basePrice

            product.newPrice = newBasePrice
            product.amountProduct = action.payload.amount
          }

          return product
        }),
      }

    case 'CLEAR_PRODUCT_LIST':
      if (action.payload.confirmedOrder) {
        return {
          ...state,
          productList: [],
        }
      } else {
        return state
      }

    default:
      return state
  }
}
