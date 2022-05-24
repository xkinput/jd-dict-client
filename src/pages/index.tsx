import { Box, Button, Container, Grid, GridItem, Stack } from '@chakra-ui/react'
import { useState } from 'react'
import { UserInfo } from '~/components/home/UserInfo'
import { CreatePhrase } from '~/components/phrase/Create'
import { PhraseList } from '~/components/phrase/List'
import { CreatePhraseModal } from '~/components/phrase/modal/Create'
import { FindManyPhraseQueryVariables } from '~/generated/gql'

export const Index = () => {
  const [ findManyPhraseListVariables, setFindManyPhraseListVariables ] = useState<FindManyPhraseQueryVariables>({
    take: 5,
  })

  return <>
    <Container maxW='container.lg' py="3" >
      <Grid templateColumns='1fr 200px' gap={6}>
        <GridItem>
          <PhraseList variables={findManyPhraseListVariables}/>
        </GridItem>
        <GridItem>
          <Stack bg="blackAlpha.100" rounded="md">
            <UserInfo />
            <CreatePhraseModal>
              <CreatePhrase/>
            </CreatePhraseModal>
          </Stack>
        </GridItem>
      </Grid>
    </Container>
  </>
}
