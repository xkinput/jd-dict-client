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
  new HttpLink({ uri: import.meta.env.VITE_GQL_URL })
])

if (process.env.NODE_ENV !== 'development') {
  additiveLink.concat(new RetryLink())
}

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        findManyPhrase: {
          merge(existing = [], incoming) {
            return [ ...existing, ...incoming ]
          },
        }
      }
    }
  }
})

export const client = new ApolloClient({
  cache,
  link: additiveLink,
})
