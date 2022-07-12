import { useQuery } from '@apollo/client'
import {  Alert, AlertIcon, AlertTitle, Avatar, Spinner, Text, VStack } from '@chakra-ui/react'
import { FC, ReactNode, useEffect, useState } from 'react'
import { FindUniqueUserDocument, FindUniqueUserQuery, FindUniqueUserQueryVariables } from '~/generated/gql'
import { mutateLog } from '~/utils/log'

interface Props {
  id: number
}
export const UserAvatarName: FC<Props> = ({ id }) => {

  let { error, data, loading, refetch } = useQuery<FindUniqueUserQuery, FindUniqueUserQueryVariables>(FindUniqueUserDocument, {
    variables: {
      where: {
        id
      }
    },
  })
  
  if (loading) return <Spinner />
  
  if (error) {
    mutateLog(error, {
      prefixTitle: '加载用户信息出错：'
    })
    return <>
      <Alert status='error'>
        <AlertIcon />
        <AlertTitle>{error.message}</AlertTitle>
      </Alert>
    </>
  }

  const avatar = data?.findUniqueUser

  if (!avatar) return <><span>未获取到用户信息</span></>

  const name = avatar.nickname || avatar.name || '未设置名称'
  
  return <VStack>
    <Avatar name={name}></Avatar>
    <Text>{name}</Text>
  </VStack>
}
