import { Container, Text, HStack, Button, Img } from '@chakra-ui/react'
import { useRootState } from '~/store'

export const UserIndex = () => {

  const isUserSingined = useRootState(s => s.user.isSingined)

  return <>
    <Container maxW='container.lg' pt="3" >
      12
    </Container>
  </>
}
