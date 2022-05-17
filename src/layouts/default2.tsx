import { Button } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'
import { routerHistory } from '../router'

interface Props {
  children?: ReactNode
}

export const Default2Layout: FC<Props> = ({ children }) => {
  function backRoute () {
    routerHistory.back()
  }
  return <>
    Default2
    {children}
    <Button onClick={backRoute}>Back</Button>
  </>
}
