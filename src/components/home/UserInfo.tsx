import { Box, Grid, GridItem, Stack } from '@chakra-ui/react'
import { FC } from 'react'

interface Props {

}

export const UserInfo: FC<Props> = () => {
  
  return (
    <>
      <Grid templateColumns='repeat(2, 1fr)' 
        templateRows='repeat(1, 1fr)'
        gap={3}>
        <GridItem py={3} textAlign="center">词条：{}</GridItem>
        <GridItem py={3} textAlign="center">提交：{}</GridItem>
      </Grid>
    </>
  )
}
