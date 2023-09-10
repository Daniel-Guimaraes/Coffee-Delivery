import { useContext, useEffect } from 'react'
import { ProductContext } from '../../contexts/contextProducts'

export function useHome() {
  const { productList, addNewProduct } = useContext(ProductContext)

  const totalProductCart = productList.length

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
    totalProductCart,
    addNewProduct,
  }
}
