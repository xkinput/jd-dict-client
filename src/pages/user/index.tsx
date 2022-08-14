import { useQuery } from '@apollo/client'
import { Container, Text, HStack, Button, Img } from '@chakra-ui/react'
import { useState } from 'react'
import { TableEnhance, TableEnhanceProps } from '~/components/table/tablext'
import { SignUpTypeMap, UserStatusMap } from '~/enum/user'
import { FindManyUserDocument, SignUpType, UserStatus } from '~/generated/gql'
import dayjs from '~/plugins/dayjs'
import { useRootState } from '~/store'
import { checkApolloError } from '~/utils/error'
import { mutateLog } from '~/utils/log'

export const UserIndex = () => {

  const isUserSingined = useRootState(s => s.user.isSingined)

  const userColumns: TableEnhanceProps['columns'] = [
    {
      title: 'ID',
      key: 'id',
      dataIndex: 'id',
    },
    {
      title: '名称',
      key: 'name',
      dataIndex: 'name',
    },
    {
      title: '昵称',
      key: 'nickname',
      dataIndex: 'nickname',
    },
    {
      title: '角色',
      key: 'roles',
      dataIndex: 'roles',
      customRender: (text) => text.map((it: any) => it.name).join(',')
    },
    {
      title: '注册类型',
      key: 'signUpType',
      dataIndex: 'signUpType',
      customRender: (text: SignUpType) => SignUpTypeMap[text] as string
    },
    {
      title: '状态',
      key: 'status',
      dataIndex: 'status',
      customRender: (text: UserStatus) => UserStatusMap[text] as string
    },
    {
      title: '注册时间',
      key: 'createAt',
      dataIndex: 'createAt',
      customRender: (text) => dayjs(text).format('L LTS')
    },
  ]

  const [ variables, setVariables ] = useState({})

  const { error, data, loading, refetch } = useQuery(FindManyUserDocument, {
    variables
  })

  let checkResError = checkApolloError(error, '加载用户列表失败：')

  if (checkResError) {
    return checkResError
  }

  return <>
    <Container maxW='container.lg' pt="3" >
      <TableEnhance columns={userColumns} dataSources={data?.findManyUser} />
    </Container>
  </>
}
