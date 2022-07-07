import { useQuery } from '@apollo/client'
import { Grid, GridItem, Spinner, Stack, Text, Tooltip, VStack } from '@chakra-ui/react'
import { FC } from 'react'
import { BiMessageSquareDots, BiMessageSquareEdit } from 'react-icons/bi'
import { FindUniquePhraseDocument, FindUniquePhraseQuery, FindUniquePhraseQueryVariables } from '~/generated/gql'
import dayjs from '~/plugins/dayjs'
import { formatDateOfFromNow } from '~/utils/tool'
import { TooltipRef } from '../chakra/helper'

interface Props {
  id: number
}

export const PhraseCard: FC<Props> = ({ id }) => {
  const { error, data: initData, loading } = useQuery<FindUniquePhraseQuery, FindUniquePhraseQueryVariables>(FindUniquePhraseDocument, {
    variables: {
      where: {
        id
      }
    }
  })

  const phrase = initData?.findUniquePhrase
  
  if (loading) return <VStack><Spinner/></VStack>
  if (error) return <>出错了，{error.message}</>
  return <Grid
    key={phrase?.id}
    px={{ base: 3, md: 10 }}
    py={{ base: 3 }}
    bg="blackAlpha.100"
    _hover={{ bg: 'blackAlpha.200' }}
    rounded='md'
    w="full"
    gap={4}
    transition="background 0.2s ease-in-out"
    cursor="pointer"
  >
    <GridItem rowSpan={2} colSpan={1}>
      <Text ml={{ base: 1, md: 4 }} mt={3} fontSize={phrase?.word && getWordFontSize(phrase.word)}>{phrase?.word}</Text>
    </GridItem>
    <GridItem colSpan={2} fontSize="xl" as="code">{phrase?.code}</GridItem>
    <GridItem colSpan={2}>
      <Stack direction="row" spacing={5}>
        <Stack direction="row" aria-label={`评论数，共计${phrase?._count.comments}`} alignItems="center">
          <Tooltip label='评论数'>
            <TooltipRef><BiMessageSquareDots/></TooltipRef>
          </Tooltip>
          <Text ml={2}>{phrase?._count.comments}</Text>
        </Stack>
        <Stack direction="row" alignItems="center">
          <Tooltip label='提议数'>
            <TooltipRef><BiMessageSquareEdit /></TooltipRef>
          </Tooltip>
          <Text ml={2}>{phrase?._count.pullRequests}</Text>
        </Stack>
      </Stack>
    </GridItem>
    <GridItem colSpan={4} textAlign="right">
      <Text color="GrayText" title={dayjs(phrase?.updateAt).format('L LTS')}>{formatDateOfFromNow(phrase?.updateAt)}</Text>
    </GridItem>
  </Grid>
}

function getWordFontSize(word: string): string {
  let len = word.length
  let map = {
    2: '4xl',
    6: '3xl',
    10: '2xl',
    14: 'xl',
  }

  return Object.entries(map).find(([ k, v ]) => len <= Number(k))?.[1] ?? 'xl'
}
