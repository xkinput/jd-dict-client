import { useQuery } from '@apollo/client'
import { Grid, GridItem, Skeleton, Stack, VStack, Text, Tooltip, Button } from '@chakra-ui/react'
import { FC, useEffect, useRef, useState } from 'react'
import { BsInboxFill } from 'react-icons/bs'
import { BiMessageSquareDots, BiMessageSquareEdit } from 'react-icons/bi'
import dayjs from '~/plugins/dayjs'
import { FindManyPhraseDocument, FindManyPhraseQuery, FindManyPhraseQueryVariables } from '~/generated/gql'
import { TooltipRef } from '../chakra/helper'
import { useInfiniteScroll, useVirtualList } from 'ahooks'
import { cloneDeep, merge } from 'lodash'
import { formatDateOfFromNow, sleep } from '~/utils/tool'
import { PhraseCard } from './Card'

interface Props {
  variables: FindManyPhraseQueryVariables
}

export const PhraseList: FC<Props> = ({ variables: initVariables }) => {
  const containerRef = useRef(null)
  const [ variables, setVariables ] = useState(merge({
    take: 5,
    skip: 0
  }, initVariables))
  const { error, data: initData, refetch, fetchMore } = useQuery<FindManyPhraseQuery, FindManyPhraseQueryVariables>(FindManyPhraseDocument, {
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
          skip: cursor ? 1 : 0,
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

  return <VStack ref={containerRef} spacing={4} align='stretch' h="calc(100vh - 130px)" overflow="auto" >
    {
      loading
        ? <Stack>
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} h='130' rounded="md" />
          ))}
        </Stack>
        : data?.list?.map(it => {
          return (
            <PhraseCard id={it.id} key={it.id} />
          )
        })
    }
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
