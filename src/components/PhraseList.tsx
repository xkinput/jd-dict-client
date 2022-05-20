import { useQuery } from '@apollo/client'
import { Box, Button, Grid, GridItem, Skeleton, Spinner, Stack, StackDivider, VStack } from '@chakra-ui/react'
import { FC } from 'react'
import { FindManyPhraseDocument, FindManyPhraseQuery, FindManyPhraseQueryVariables } from '~/generated/gql'

interface Props {
  variables: FindManyPhraseQueryVariables
}

export const PhraseList: FC<Props> = ({ variables }) => {
  let { loading, error, data, networkStatus, refetch } = useQuery<FindManyPhraseQuery, FindManyPhraseQueryVariables>(FindManyPhraseDocument, {
    variables
  })

  if (loading)return <Stack>
    {Array.from({ length: 3 }).map((_, i) => (
      <Skeleton key={i} h='100' rounded="md" />
    ))}
  </Stack>
  if (error) return <>Ops! Error: {error}</>

  return <VStack spacing={4} align='stretch'>
    {data.findManyPhrase.map(phrase => {
      return <Grid
        key={phrase.id}
        p="3"
        bg="blackAlpha.100"
        h="100"
        rounded='md'
        gap={4}>
        <GridItem rowSpan={2} colSpan={1} fontSize="xl">{phrase.word}</GridItem>
        <GridItem colSpan={2} bg='papayawhip' />
        <GridItem colSpan={2} bg='papayawhip' />
        <GridItem colSpan={4} bg='tomato' />
      </Grid>
    })}
  </VStack>
}
