import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { ApolloProvider } from '@apollo/client'
import App from './App'

import '@unocss/reset/tailwind.css'
import './index.css'
import 'uno.css'
import 'virtual:unocss-devtools'
import { client } from './plugins/apollo'
import { Provider } from 'react-redux'
import { store } from './store'
import { ToastContainer } from './utils/log'
import theme from './plugins/theme'

const container = document.getElementById('app')
const root = createRoot(container!)

root.render(
  <StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Provider store={store}>
        <ApolloProvider client={client}>
          <App/>
          <ToastContainer/>
        </ApolloProvider>
      </Provider>
    </ChakraProvider>
  </StrictMode>
)
