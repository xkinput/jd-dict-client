import { useQuery } from '@apollo/client'
import {  Alert, AlertIcon, AlertTitle, Avatar, Box, HStack, IconButton, Spinner, Text, VStack } from '@chakra-ui/react'
import { BiCaretUp, BiCaretDown  } from 'react-icons/bi'
import { FC, ReactNode, useEffect, useState } from 'react'
import { FindUniquePullRequestDocument, FindUniquePullRequestQuery, FindUniquePullRequestQueryVariables } from '~/generated/gql'
import { mutateLog } from '~/utils/log'

interface Props {
  id: number
}

export const PullRequestCard: FC<Props> = ({ id }) => {

  let { error, data, loading, refetch } = useQuery<FindUniquePullRequestQuery, FindUniquePullRequestQueryVariables>(FindUniquePullRequestDocument, {
    variables: {
      where: {
        id
      }
    },
  })
  
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

  return <Box rounded="md"
    border="1px"
    borderColor="whitesmoke"
    p={2} 
    transition="ease-in-out 0.3s" 
    _hover={{ shadow: 'md', transition: 'ease-in-out 0.3s' }}>
    <Text>{pr.word}</Text>
    <Text>{pr.code}</Text>
    <HStack justifyContent="end">
      <IconButton aria-label='支持' icon={<BiCaretUp />} />
      <IconButton aria-label='拒绝' icon={<BiCaretDown />} />
    </HStack>
  </Box>
}
