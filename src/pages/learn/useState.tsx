import { useDebugValue, useEffect, useRef, useState, useTransition } from 'react'
import { Box, Button, Center, Container, HStack, IconButton, Input, Spacer } from '@chakra-ui/react'

export default function UseState() {
  const [ data, setData ] = useState<{
    a: number,
    b: number | null
  }>(() => {
    return {
      a: 1,
      b: null
    }
  })

  useEffect(() => {
    setData({
      ...data,
      b: 2,
    })
  }, [])
  
  return (
    <>
      <Container>
        {JSON.stringify(data)}
        
      </Container>
    </>
  )
}
