import { useContext, useEffect } from 'react'
import { ProductContext } from '../../contexts/contextProducts'

export function useHome() {
  const { productList, addNewProduct } = useContext(ProductContext)

  const totalProductsCart = productList.length

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scroll: HTMLAnchorElement | null =
        document.querySelector('.cartButtonScroll')

      if (scroll) {
        scroll.classList.toggle('active', window.scrollY > 450)
      }
    })
  }, [])

  return {
    totalProductsCart,
    addNewProduct,
  }
}
