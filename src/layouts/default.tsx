import { FC, ReactNode } from 'react'
import { Header } from '../components/Header'

interface Props {
  children?: ReactNode
}

export const DefaultLayout: FC<Props> = ({ children }) => <>
  <Header/>
  {children}
</>
