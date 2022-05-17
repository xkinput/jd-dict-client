import { useDebugValue, useRef, useState, useTransition} from 'react'
import { Box, Button, Center, Container, HStack, IconButton, Input, Spacer } from '@chakra-ui/react'

function useMyHook() {
  const [number, setNumber] = useState(0)

  useDebugValue(number * 2)

  setInterval(() => {
    setNumber(number + 1)
  }, 1000)

  return number
}

export default function UseDebugValue() {

  const number = useMyHook()
  
  return (
    <>
      <Container>
        <HStack>
          <Box>
            number: {number}
          </Box>
        </HStack>
        <Center className='my-5'>
        </Center>
      </Container>
    </>
  )
}
