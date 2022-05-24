import { ErrorCode } from '../generated/gql'
import { ApolloError } from '@apollo/client'
import { createStandaloneToast, UseToastOptions } from '@chakra-ui/toast'
import { ErrorCodeMap } from '~/enum/error'
import { ReactNode } from 'react'

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

  if (e instanceof ApolloError) {
    description = e.graphQLErrors.map(it => (<>
      {(it.extensions.code && ErrorCodeMap.get(it.extensions.code as ErrorCode)) || it.message}
    </>))
  }

  let isUseDescTitle = Boolean(Array.isArray(description) && description.length > 0)

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
