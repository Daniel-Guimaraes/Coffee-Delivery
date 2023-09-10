export interface Product {
  id: string
  img: string
  name: string
  price: number
  quantity: number
}

interface ProductState {
  productList: Product[]
}

type ProductAction =
  | { type: 'ADD_NEW_PRODUCT'; payload: { newProduct: Product } }
  | { type: 'REMOVE_PRODUCT_LIST'; payload: { name: string } }
  | {
      type: 'HANDLE_AMOUNT_PRODUCT_IN_THE_CART'
      payload: { quantity: number; id: string }
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
          if (product.id === action.payload.id) {
            product.quantity =
              action.payload.quantity === 0 ? 1 : action.payload.quantity
          }

          return product
        }),
      }

    case 'CLEAR_PRODUCT_LIST':
      return {
        ...state,
        productList: [],
      }

    default:
      return state
  }
}
