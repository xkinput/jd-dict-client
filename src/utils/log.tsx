import { ErrorCode } from '../generated/gql'
import { ApolloError } from '@apollo/client'
import { ErrorCodeMap } from '~/enum/error'
import { ReactNode } from 'react'
import { GraphQLError } from 'graphql'
import { createStandaloneToast, UseToastOptions } from '@chakra-ui/react'

export const { ToastContainer, toast } = createStandaloneToast({
  defaultOptions: {
    isClosable: true
  }
})

export interface ToastOpts extends UseToastOptions {
  prefixTitle?: string
}

export function mutateLog(e: ApolloError | Error, toastOpts: ToastOpts = { prefixTitle: '' }) {
  if (!e) {
    console.log('mutateLog: e is null', 'toastOpts:', toastOpts)
    return
  }
  console.dir(e)
  let msg: string = e.message
  let description: ReactNode | string

  if (e instanceof ApolloError && e.graphQLErrors.length > 0) {
    description = e.graphQLErrors.map((graphQLError, idx) => (
      <span key={idx}>
        {(graphQLError?.extensions?.code === 'MU1000' && 'errors' in graphQLError.extensions
          ? (graphQLError.extensions.errors as unknown as GraphQLError[]).map(it => transCodeToMsg(it, graphQLError)).map(it => <>{it}<br/></>)
          : transCodeToMsg(graphQLError)
        )}
      </span>
    ))
  }

  let isUseDescTitle = Array.isArray(description) && description.length > 0

  let title = <>
    {toastOpts.prefixTitle}{isUseDescTitle ? description : msg}
  </>

  description = !isUseDescTitle ?
    (toastOpts.description
      ? <div>
        {toastOpts.description}
        {description} 
      </div>
      : description)
    : null

  toast({
    title,
    status: 'error',
    ...toastOpts,
    description
  })
}

function transCodeToMsg(error: GraphQLError, graphQLError?: GraphQLError) {
  console.log('%c 🍲 error: ', 'font-size:20px;background-color: #ED9EC7;color:#fff;', error)
  let extensions = error?.extensions
  let idx = (extensions?.pr as any)?._prIndex
  let args = extensions?.args

  let path = error?.path || graphQLError?.path

  let msg = ErrorCodeMap.get(extensions?.code as keyof typeof ErrorCode) || error.message

  if (path?.[0] === 'createOneIssue') {
    return `${idx && `词条${idx}：`} ${msg}`
  }

  return msg
}
