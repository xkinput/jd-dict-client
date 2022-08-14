import { ApolloError } from '@apollo/client'
import { Alert, AlertIcon, AlertTitle } from '@chakra-ui/react'
import { mutateLog } from './log'

export function checkApolloError(error: ApolloError | undefined, prefixTitle?: string) {
  if (error) {
    mutateLog(error, {
      prefixTitle
    })
    return <>
      <Alert status='error'>
        <AlertIcon />
        <AlertTitle>{error.message}</AlertTitle>
      </Alert>
    </>
  }
}
