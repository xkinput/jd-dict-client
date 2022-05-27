import { Box, Container, Flex, Stack } from '@chakra-ui/react'
import { useState } from 'react'
import { UserInfo } from '~/components/home/UserInfo'
import { FormIssue } from '~/components/issue/Create'
import { PhraseList } from '~/components/issue/List'
import { CreatePhraseModal } from '~/components/issue/modal/Create'
import { FindManyPhraseQueryVariables } from '~/generated/gql'
import { useRootState } from '~/store'

export const Index = () => {
  const [ findManyPhraseListVariables, setFindManyPhraseListVariables ] = useState<FindManyPhraseQueryVariables>({
    take: 5,
  })

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
            w={{ base: 'full', md: 200 }}
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
