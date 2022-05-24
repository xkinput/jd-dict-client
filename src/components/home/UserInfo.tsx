import { Box, Stack } from '@chakra-ui/react'
import { FC } from 'react'

interface Props {

}

export const UserInfo: FC<Props> = () => {
  
  return (
    <>
      <Stack direction="row" justifyContent="space-around">
        <Box>词条：{}</Box>
        <Box>提交：{}</Box>
      </Stack>
    </>
  )
}
