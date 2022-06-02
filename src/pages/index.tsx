import { Box, Container, Flex, Stack } from '@chakra-ui/react'
import { useState } from 'react'
import { UserInfo } from '~/components/home/UserInfo'
import { FormIssue } from '~/components/issue/Create'
import { PhraseList } from '~/components/issue/List'
import { CreatePhraseModal } from '~/components/issue/modal/Create'
import { FindManyPhraseQueryVariables, SortOrder } from '~/generated/gql'
import { useRootState } from '~/store'

export const Index = () => {
  const findManyPhraseListVariables: FindManyPhraseQueryVariables = {
    take: 5,
    skip: 0,
    orderBy: [
      {
        updateAt: SortOrder.Desc
      }
    ]
  }

  const isUserSingined = useRootState(s => s.user.isSingined)

  return <>
    <Container maxW='container.lg' py="3" >
      <Flex gap={6} wrap={{ base: 'wrap', md: 'nowrap' }}>
        <Box flexGrow={1} order={{ base: 2, md: 1 }}>
          <PhraseList variables={findManyPhraseListVariables}/>
        </Box>
        {
          isUserSingined
          && <Box
            display={{ base: 'block', md: 'inline-block' }}
            minW={{ base: 'full', md: 240 }}
            order={{ base: 1, md: 2 }}
          >
            <Stack bg="blackAlpha.100" rounded="md">
              <UserInfo />
              <CreatePhraseModal>
                <FormIssue />
              </CreatePhraseModal>
            </Stack>
          </Box>
        }
      </Flex>
    </Container>
  </>
}
