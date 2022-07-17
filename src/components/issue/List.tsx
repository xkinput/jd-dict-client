import { useQuery } from '@apollo/client'
import { Grid, GridItem, Skeleton, Stack, VStack, Text, Tooltip, Button, Badge, HStack, Icon, Box } from '@chakra-ui/react'
import { createRef, FC, useRef, useState } from 'react'
import { BiMessageSquareDots, BiMessageSquareEdit } from 'react-icons/bi'
import dayjs from '~/plugins/dayjs'
import { FindManyIssueDocument, FindManyIssueQuery, FindManyIssueQueryVariables } from '~/generated/gql'
import { TooltipRef } from '../chakra/helper'
import { useInfiniteScroll } from 'ahooks'
import { merge } from 'lodash'
import { formatDateOfFromNow } from '~/utils/tool'
import { IssueContentModal } from './modal/Content'
import { IssueContent } from './Content'

interface Props {
  variables: FindManyIssueQueryVariables
}

export const IssueList: FC<Props> = ({ variables: initVariables }) => {
  const containerRef = useRef(null)
  const [ variables, setVariables ] = useState(merge({
    pullRequestsTake: 3,
    take: 5,
    skip: 0
  } as FindManyIssueQueryVariables, initVariables))
  let { error, data: initData, refetch, fetchMore } = useQuery<FindManyIssueQuery, FindManyIssueQueryVariables>(FindManyIssueDocument, {
    variables,
  })

  // 选择
  const issueModalRef = createRef<{
    onOpen: () => void,
  }>()
  const [ selectedIssue, setSelectedIssue ] = useState<FindManyIssueQuery['findManyIssue'][number] | null>(null)

  function selectIssue(issue: FindManyIssueQuery['findManyIssue'][number]) {
    setSelectedIssue(issue)
    issueModalRef.current?.onOpen()
  }

  // 加载更多
  interface Result {
    list: FindManyIssueQuery['findManyIssue'];
    nextId: number | undefined;
  }

  async function loadMoreList(cursor: number | undefined): Promise<Result> {
    let { data } = await fetchMore({
      variables: {
        take: 5,
        ...(cursor && {
          cursor: {
            id: cursor
          },
        }),
        skip: cursor ? 1 : 0,
      }
    })

    return {
      list: data.findManyIssue.slice(),
      nextId: data.findManyIssue?.at(-1)?.id || undefined
    }
  }

  const { data, loading, loadMore, loadingMore, noMore } = useInfiniteScroll(
    (d) => {
      return loadMoreList(d?.nextId)
    },
    {
      target: containerRef,
      isNoMore: (d) => d?.nextId === undefined,
    })

  return <VStack ref={containerRef} spacing={4} align='stretch' h="calc(100vh - 130px)" overflow="auto" >
    {
      loading
        ? <Stack>
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} h='130' rounded="md" />
          ))}
        </Stack>
        : (
          <>
            {data?.list?.map(issue => {
              return (
                <Grid
                  key={issue.id}
                  px={{ base: 3, md: 10 }}
                  py={{ base: 3 }}
                  bg="blackAlpha.100"
                  _hover={{ bg: 'blackAlpha.200' }}
                  transition="background 0.2s ease-in-out"
                  cursor="pointer"
                  rounded='md'
                  w="full"
                  gap={4}
                  templateColumns='repeat(5, 1fr)'
                  onClick={() => selectIssue(issue)}
                >
                  {
                    issue.content && (
                      <GridItem colSpan={5}>
                        <Text>{issue.content}</Text>
                      </GridItem>
                    )
                  }
                  <GridItem colSpan={5}>
                    <HStack justifyContent="space-between">
                      <HStack width={[ '65%', '70%', '80%' ]} overflow="hidden">
                        <Text>@{issue.user.nickname || issue.user.name}</Text>
                        <HStack maxWidth={[ '40%', '90%', '90%' ]} overflowX="auto">
                          {
                            issue.pullRequests.map(pr => (
                              <Tooltip label={pr.word || pr.code || pr.phrase?.word} key={pr.id}>
                                <TooltipRef>
                                  <Badge fontSize="sm" key={pr.id} colorScheme={
                                    { Create: 'green', Change: 'orange', 'Delete': 'red' }[pr.type]
                                  }>
                                    {
                                      (pr.word || pr.code || pr.phrase?.word)?.slice(0, 4)
                                    }
                                  </Badge>
                                </TooltipRef>
                              </Tooltip>
                            ))
                          }
                        </HStack>
                        {issue._count.pullRequests >= 3 && (
                          <Badge colorScheme="gray">
                            {issue._count.pullRequests}
                          </Badge>
                        )}
                      </HStack>
                      <HStack>
                        <HStack>
                          <Icon as={BiMessageSquareDots} size="1x" />
                          <Text fontSize="sm">{issue._count.comments}</Text>
                        </HStack>
                        <Text color="GrayText" title={dayjs(issue.updateAt).format('L LTS')}>{formatDateOfFromNow(issue.updateAt)}</Text>
                      </HStack>
                    </HStack>
                  </GridItem>
                </Grid>
              )
            })}
          </>
        )
    }
    <Stack mt={1} pb={20} justifyContent="center">
      {!noMore && (
        <Button w="full" onClick={loadMore} disabled={loadingMore}>
          {loadingMore ? '加载更多...' : '加载更多'}
        </Button>
      )}

      {noMore && <Text textAlign="center">没有更多了</Text>}
    </Stack>
    <IssueContentModal ref={issueModalRef}>
      {
        selectedIssue && 
          <IssueContent data={selectedIssue}/>
      }
    </IssueContentModal>
  </VStack>
}
