import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  HttpLink,
  from,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { RetryLink } from '@apollo/client/link/retry'
import { onError } from '@apollo/client/link/error'
import { getAuthKey } from '~/utils/tool'

const setAuthorizationLink = setContext((request, previousContext) => {
  let token = getAuthKey()

  return {
    headers: { Authorization: token }
  }
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path, stack }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Stack: ${stack} Path: ${path}`,
      ),
    )

  if (networkError) console.log(`[Network error]: ${networkError}`)
})

const additiveLink = from([
  setAuthorizationLink,
  errorLink,
  new RetryLink(),
  new HttpLink({ uri: import.meta.env.VITE_GQL_URL })
])

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: additiveLink,
})
