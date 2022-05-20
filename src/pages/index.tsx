import { useQuery } from '@apollo/client'
import { Button, Container, Stack } from '@chakra-ui/react'
import { Suspense, useState } from 'react'
import { PhraseList } from '~/components/PhraseList'
import { FindManyPhraseDocument, FindManyPhraseQueryVariables } from '~/generated/gql'

export const Index = () => {
  const [ findManyPhraseListVariables, setFindManyPhraseListVariables ] = useState<FindManyPhraseQueryVariables>({
    take: 5,
  })

  return <>
    <Container maxW='container.lg' py="3" >
      <PhraseList variables={findManyPhraseListVariables}/>
    </Container>
  </>
}
