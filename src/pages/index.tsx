import { Container } from '@chakra-ui/react'
import { useState } from 'react'
import { PhraseList } from '~/components/phrase/List'
import { FindManyPhraseQueryVariables } from '~/generated/gql'

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
