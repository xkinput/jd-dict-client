import { useQuery } from '@apollo/client'
import { Grid, GridItem, Skeleton, Stack, VStack, Text, Tooltip, Button } from '@chakra-ui/react'
import { FC, useEffect, useRef, useState } from 'react'
import { BsInboxFill } from 'react-icons/bs'
import { BiMessageSquareDots, BiMessageSquareEdit } from 'react-icons/bi'
import dayjs from '~/plugins/dayjs'
import { FindManyPhraseDocument, FindManyPhraseQuery, FindManyPhraseQueryVariables } from '~/generated/gql'
import { TooltipRef } from '../chakra/helper'
import { useInfiniteScroll, useVirtualList } from 'ahooks'
import { cloneDeep } from 'lodash'

interface Props {
  variables: FindManyPhraseQueryVariables
}

export const PhraseList: FC<Props> = ({ variables: initVariables }) => {
  const containerRef = useRef(null)
  const [ variables, setVariables ] = useState({
    take: 5,
    skip: 0
  })
  let { error, data: initData, refetch, fetchMore } = useQuery<FindManyPhraseQuery, FindManyPhraseQueryVariables>(FindManyPhraseDocument, {
    variables,
  })

  interface Result {
    list: FindManyPhraseQuery['findManyPhrase'];
    nextId: number | undefined;
  }

  async function loadMoreList(cursor: number | undefined, take: number = 5): Promise<Result> {
    let { data } = await fetchMore({
      variables: {
        take,
        ...(cursor && {
          cursor: {
            id: cursor
          },
          skip: 1
        })
      }
    })

    return {
      list: data.findManyPhrase,
      nextId: data.findManyPhrase?.at(-1)?.id || undefined
    }
  }

  const { data, loading, loadMore, loadingMore, noMore } = useInfiniteScroll(
    (d) => {
      return loadMoreList(d?.nextId || initData?.findManyPhrase?.[0]?.id)
    },
    {
      target: containerRef,
      isNoMore: (d) => d?.nextId === undefined,
    })

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

  return <VStack spacing={4} align='stretch' h="calc(100vh - 90px)" overflow="auto" >
    <VStack ref={containerRef}>
      {
        loading
          ? <Stack>
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} h='130' rounded="md" />
            ))}
          </Stack>
          : data?.list?.map(phrase => {
            return (
              <Grid
                key={phrase.id}
                px={{ base: 3, md: 10 }}
                py={{ base: 3 }}
                bg="blackAlpha.100"
                rounded='md'
                w="full"
                gap={4}
              >
                <GridItem rowSpan={2} colSpan={1}>
                  <Text ml={{ base: 1, md: 4 }} mt={3} fontSize={getWordFontSize(phrase.word)}>{phrase.word}</Text>
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
          })
      }
    </VStack>
    <Stack mt={1} pb={20} justifyContent="center">
      {!noMore && (
        <Button w="full" onClick={loadMore} disabled={loadingMore}>
          {loadingMore ? '加载更多...' : '加载更多'}
        </Button>
      )}

      {noMore && <Text textAlign="center">没有更多了</Text>}
    </Stack>
  </VStack>
}
