import { Box, Container, Flex, Stack, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import { useState } from 'react'
import { UserInfo } from '~/components/home/UserInfo'
import { FormIssue } from '~/components/issue/Create'
import { IssueList } from '~/components/issue/List'
import { PhraseList } from '~/components/phrase/List'
import { CreateIssueModal } from '~/components/issue/modal/Create'
import { FindManyIssueQueryVariables, FindManyPhraseQueryVariables, SortOrder } from '~/generated/gql'
import { useRootState } from '~/store'

export const Index = () => {
  const findManyPhraseVariables: FindManyPhraseQueryVariables = {
    take: 5,
    skip: 0,
    orderBy: [
      {
        updateAt: SortOrder.Desc
      }
    ]
  }
  const findManyIssueVariables: FindManyIssueQueryVariables = {
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
    <Container maxW='container.lg' pt="3" >
      <Flex gap={6} wrap={{ base: 'wrap', md: 'nowrap' }}>
        <Box flexGrow={1} order={{ base: 2, md: 1 }}>
          <Tabs>
            <TabList>
              <Tab>议题</Tab>
              <Tab>词条</Tab>
            </TabList>
            <TabPanels>
              <TabPanel pb={0}>
                <IssueList variables={findManyIssueVariables}/>
              </TabPanel>
              <TabPanel pb={0}>
                <PhraseList variables={findManyPhraseVariables}/>
              </TabPanel>
            </TabPanels>
          </Tabs>
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
              <CreateIssueModal>
                <FormIssue />
              </CreateIssueModal>
            </Stack>
          </Box>
        }
      </Flex>
    </Container>
  </>
}
