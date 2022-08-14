import { ApolloError, useMutation, useQuery } from '@apollo/client'
import {  Alert, AlertIcon, AlertTitle, Avatar, Box, Button, ButtonGroup, HStack, IconButton, Spinner, Text, VStack } from '@chakra-ui/react'
import { BiDislike, BiInfoCircle, BiLike  } from 'react-icons/bi'
import { FC, ReactNode, useEffect, useState } from 'react'
import { FindUniquePullRequestDocument, FindUniquePullRequestQuery, FindUniquePullRequestQueryVariables, PullRequestEvaluationAction, PullRequestType, TogglePullRequestEvaluationDocument } from '~/generated/gql'
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
  const [ mutate ] = useMutation(TogglePullRequestEvaluationDocument)
  
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

  async function toggleLike(id: number, action: PullRequestEvaluationAction) {
    try {
      const { data, errors } = await mutate({
        variables: {
          where: {
            id
          },
          data: {
            action
          }
        }
      })

      const res = data?.togglePullRequestEvaluation

      refetch()
      toast({
        title: res?.evaluation ? `已${{ 
          [PullRequestEvaluationAction.Like]: '点赞',
          [PullRequestEvaluationAction.Dislike]: '点踩',
        }[res.evaluation]}` : '已取消',
        icon: res?.evaluation ? { 
          [PullRequestEvaluationAction.Like]: <BiLike size={25}/>,
          [PullRequestEvaluationAction.Dislike]: <BiDislike size={25}/>,
        }[res.evaluation] : undefined,
        status: res?.evaluation ? 'success' : 'info'
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
      <IconButton aria-label='信息' icon={<BiInfoCircle/>} size="sm"></IconButton>
      <ButtonGroup isAttached size="sm">
        <Button
          colorScheme={pr.evaluation === PullRequestEvaluationAction.Dislike ? 'purple' : 'gray'}
          aria-label='踩'
          rightIcon={<BiDislike/>}
          onClick={() => toggleLike(pr.id, PullRequestEvaluationAction.Dislike)}
        >
          {pr._count.dislikes}
        </Button>
        <Button
          colorScheme={pr.evaluation === PullRequestEvaluationAction.Like ? 'red' : 'gray'}
          aria-label='赞'
          rightIcon={<BiLike enableBackground={1} color={ pr.evaluation === PullRequestEvaluationAction.Like ? 'white' : undefined}/>}
          onClick={() => toggleLike(pr.id, PullRequestEvaluationAction.Like)}
        >
          {pr._count.likes}
        </Button>
      </ButtonGroup>
       
    </HStack>
  </Box>
}
