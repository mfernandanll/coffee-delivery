
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
// import { Home } from './pages/Home'
import { DefaultLayout } from './layouts/DefaultLayout'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <DefaultLayout/>
      <GlobalStyle />
    </ThemeProvider>
  )
}