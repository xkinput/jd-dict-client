import { Text } from '@chakra-ui/react'
import { forwardRef } from 'react'

export const TooltipRef = forwardRef<String, any>(function HoverRef({ children, ...rest }, ref) {
  return <Text ref={ref} {...rest}>
    {children}
  </Text>
})
