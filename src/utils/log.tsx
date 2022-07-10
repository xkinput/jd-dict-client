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
  console.log('mutateLog')
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

  console.log('%c 🥘 isUseDescTitle: ', 'font-size:20px;background-color: #6EC1C2;color:#fff;', isUseDescTitle)
  
  console.log('%c 🍌 description: ', 'font-size:20px;background-color: #F5CE50;color:#fff;', description)
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
    position: 'top',
    ...toastOpts,
    description
  })
}

function transCodeToMsg(error: GraphQLError, graphQLError?: GraphQLError) {
  let extensions = error?.extensions as {
    code?: string
    exception?: { code?: string, meta?: { [key: string]: any } }
    args?: any
    pr?: any
    exist?: any
  }
  let exception = extensions?.exception
  let code = exception?.code || extensions?.code
  let idx = extensions?.pr?._prIndex
  let args = extensions?.args

  let path = error?.path || graphQLError?.path

  let msg = ErrorCodeMap.get((code) as keyof typeof ErrorCode) || error.message
  let meta = exception?.meta

  if (path?.[0] === 'createOneIssue') {
    if (code === 'PR1004') {
      let variables = {
        id: extensions?.exist?.id
      }

      msg = transMsgVariables(msg, variables)
      return `${idx ? `词条${idx}：` : ''}${msg}`
    }
    return `${idx ? `词条${idx}：` : ''}${msg} ${meta?.target?.length ? meta.target.join(', ') : ''}`
  }

  return <>{msg}</>
}

function transMsgVariables(msg: string, variables: { [k: string]: any}) {
  for (let [ k, v ] of Object.entries(variables)) {
    msg = msg.replaceAll(`{${k}}`, v)
  }
  return msg
}
