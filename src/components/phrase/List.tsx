import { useQuery } from '@apollo/client'
import { Grid, GridItem, Skeleton, Stack, VStack, Text, Tooltip } from '@chakra-ui/react'
import { FC } from 'react'
import { BsInboxFill } from 'react-icons/bs'
import { BiMessageSquareDots, BiMessageSquareEdit } from 'react-icons/bi'
import dayjs from '~/plugins/dayjs'
import { FindManyPhraseDocument, FindManyPhraseQuery, FindManyPhraseQueryVariables } from '~/generated/gql'
import { TooltipRef } from '../chakra/helper'

interface Props {
  variables: FindManyPhraseQueryVariables
}

export const PhraseList: FC<Props> = ({ variables }) => {
  let { loading, error, data, refetch } = useQuery<FindManyPhraseQuery, FindManyPhraseQueryVariables>(FindManyPhraseDocument, {
    variables
  })

  if (loading)return <Stack>
    {Array.from({ length: 3 }).map((_, i) => (
      <Skeleton key={i} h='130' rounded="md" />
    ))}
  </Stack>

  if (error) return <>Ops! Error: {error}</>

  if (data.findManyPhrase.length === 0) return <Stack alignItems="center">
    <BsInboxFill fontSize="50"/>
    <Text fontSize="lg" as="em">到底了……</Text>
  </Stack>

  return <VStack spacing={4} align='stretch'>
    {data.findManyPhrase.map(phrase => {
      return (
        <Grid
          key={phrase.id}
          px={{ base: 3, md: 10 }}
          py={{ base: 3 }}
          bg="blackAlpha.100"
          h="130"
          rounded='md'
          gap={4}>
          <GridItem rowSpan={2} colSpan={1}>
            <Text ml={{ base: 1, md: 4 }} mt={3} fontSize="4xl">{phrase.word}</Text>
          </GridItem>
          <GridItem colSpan={2} fontSize="xl" as="code">{phrase.code}</GridItem>
          <GridItem colSpan={2}>
            <Stack direction="row" spacing={5}>
              <Stack direction="row" aria-label={`评论数，共计${phrase._count.comments}`} alignItems="center">
                <Tooltip label='评论数'>
                  <TooltipRef><BiMessageSquareDots/></TooltipRef>
                </Tooltip>
                <Text ml={2}>{phrase._count.comments}</Text>
              </Stack>
              <Stack direction="row" alignItems="center">
                <Tooltip label='提议数'>
                  <TooltipRef><BiMessageSquareEdit /></TooltipRef>
                </Tooltip>
                <Text ml={2}>{phrase._count.pullRequests}</Text>
              </Stack>
            </Stack>
          </GridItem>
          <GridItem colSpan={4} textAlign="right">
            <Text color="GrayText">{dayjs(phrase.updateAt).format('L LTS')}</Text>
          </GridItem>
        </Grid>
      )
    })}
  </VStack>
}
