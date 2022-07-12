import { useQuery } from '@apollo/client'
import { Grid, GridItem, Skeleton, Stack, VStack, Text, Tooltip, Button, Badge, HStack, Box, Icon, Flex } from '@chakra-ui/react'
import { FC, useEffect, useRef, useState } from 'react'
import { FindManyIssueQuery, FindUniqueIssueDocument, FindUniqueIssueQuery, FindUniqueIssueQueryVariables } from '~/generated/gql'
import { formatDateOfFromNow } from '~/utils/tool'
import { PullRequestCard } from '../pullRequest/Card'
import { UserAvatarName } from '../user/AvatarName'

interface Props {
  data: FindManyIssueQuery['findManyIssue'][number]
}

export const IssueContent: FC<Props> = ({ data: selectedIssue }) => {
  const containerRef = useRef(null)
  const [ variables, setVariables ] = useState<FindUniqueIssueQueryVariables>({
    where: {
      id: selectedIssue.id
    }
  })
  let { error, data, loading, refetch } = useQuery<FindUniqueIssueQuery, FindUniqueIssueQueryVariables>(FindUniqueIssueDocument, {
    variables,
  })

  const issue = data?.findUniqueIssue

  console.log('%c 🍼️ issue: ', 'font-size:20px;background-color: #93C0A4;color:#fff;', issue)

  const Content = (
    loading
      ? <Skeleton h='130' rounded="md" />
      : (
        <>
          <HStack>
            <Box>
              <Text>{issue?.content}</Text>
            </Box>
          </HStack>
          <HStack justifyContent="end">
            <Text color="GrayText">{formatDateOfFromNow(issue?.updateAt)}</Text>
          </HStack>
        </>
      )
  )

  const UserSide = (
    issue?.userId && <UserAvatarName id={issue.userId} />
  )

  const PullRequests = (
    issue?.pullRequests && (
      <>
        <Grid templateColumns="repeat(3, 1fr)" gap={2}>
          {issue.pullRequests.map(pr => (
            <GridItem p={1} key={pr.id}>
              <PullRequestCard id={pr.id}/>
            </GridItem>
          ))}
        </Grid>
      </>
    )
  )

  return <VStack ref={containerRef} spacing={4} align='stretch' overflow="auto" >
    <HStack alignItems="start">
      <Box w="70%">
        {Content}
        {PullRequests}
      </Box>
      <Box w="30%">
        {UserSide}
      </Box>
    </HStack>
  </VStack>
}
