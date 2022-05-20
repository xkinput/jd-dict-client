import { ApolloError } from '@apollo/client'
import { createStandaloneToast, UseToastOptions } from '@chakra-ui/toast'

export const { ToastContainer, toast } = createStandaloneToast({
  defaultOptions: {
    isClosable: true
  }
})

export interface ToastOpts extends UseToastOptions {
  prefixTitle?: string
}

export function mutateLog(e: ApolloError | Error, toastOpts: ToastOpts = { prefixTitle: '' }) {
  console.dir(e)

  const msg = e.message
  const code = e.name

  toast({
    title: toastOpts.prefixTitle + msg,
    status: 'error',
    ...toastOpts,
  })
}
