import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/themes/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ProductContextProvider } from './contexts/contextProducts'
import { ToastContainer } from 'react-toastify'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <ToastContainer autoClose={2000} />
      <BrowserRouter>
        <ProductContextProvider>
          <Router />
        </ProductContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
