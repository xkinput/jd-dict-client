import { ApolloError, useMutation, useQuery } from '@apollo/client'
import {  Alert, AlertIcon, AlertTitle, Avatar, Box, HStack, IconButton, Spinner, Text, VStack } from '@chakra-ui/react'
import { BiCaretUp, BiCaretDown, BiHeart, BiHeartCircle  } from 'react-icons/bi'
import { FC, ReactNode, useEffect, useState } from 'react'
import { FindUniquePullRequestDocument, FindUniquePullRequestQuery, FindUniquePullRequestQueryVariables, ToggleLikePrDocument } from '~/generated/gql'
import { mutateLog, toast } from '~/utils/log'
import { useRootState } from '~/store'

interface Props {
  id: number
}

export const PullRequestCard: FC<Props> = ({ id }) => {
  const isUserSingined = useRootState(s => s.user.isSingined)

  let { error, data, loading, refetch } = useQuery<FindUniquePullRequestQuery, FindUniquePullRequestQueryVariables>(FindUniquePullRequestDocument, {
    variables: {
      where: {
        id
      }
    },
  })
  const [ mutate ] = useMutation(ToggleLikePrDocument)
  
  if (loading) return <Spinner />
  
  if (error) {
    mutateLog(error, {
      prefixTitle: '加载PR出错：'
    })
    return <>
      <Alert status='error'>
        <AlertIcon />
        <AlertTitle>{error.message}</AlertTitle>
      </Alert>
    </>
  }

  const pr = data?.findUniquePullRequest

  if (!pr) return <><span>未获取到信息</span></>

  async function toggleLike(id: number) {
    try {
      let { data, errors } = await mutate({
        variables: {
          where: {
            id
          }
        }
      })

      refetch()
      toast({
        title: pr?.liked ? '已取消' : '已点赞',
        icon: pr?.liked ? <BiHeart size={25} /> : <BiHeartCircle size={25} />,
        status: pr?.liked ? 'info' : 'success'
      })
    } catch (e) {
      mutateLog(e as ApolloError)
    }
  }

  return <Box rounded="md"
    border="1px"
    borderColor="whitesmoke"
    p={2} 
    transition="ease-in-out 0.3s" 
    _hover={{ shadow: 'md', transition: 'ease-in-out 0.3s' }}>
    <Text>{pr.word}</Text>
    <Text>{pr.code}</Text>
    <HStack justifyContent="end">
      <Text>{pr._count.likes}</Text>
      {
        isUserSingined && 
          <IconButton
            colorScheme={pr.liked ? 'red' : 'gray'}
            aria-label='喜欢'
            icon={pr.liked ? <BiHeartCircle/> : <BiHeart />}
            onClick={() => toggleLike(pr.id)}
          />
      }
    </HStack>
  </Box>
}
