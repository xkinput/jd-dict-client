import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
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

const container = document.getElementById('app')
const root = createRoot(container!)

root.render(
  <StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <App/>
          <ToastContainer/>
        </ApolloProvider>
      </Provider>
    </ChakraProvider>
  </StrictMode>
)
