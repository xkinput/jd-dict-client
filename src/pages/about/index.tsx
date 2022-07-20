import { Container, Text, HStack, Button, Img } from '@chakra-ui/react'
import { BsGithub } from 'react-icons/bs'
import { useRootState } from '~/store'

export const AboutIndex = () => {

  const isUserSingined = useRootState(s => s.user.isSingined)

  return <>
    <Container maxW='container.lg' pt="3" >
      <Text lineHeight={10}>本站意指为「星空输入法 键道6」方案提供在线词库组合、处理议题、投票评论功能。</Text>
      <Text lineHeight={10}>本站为开源项目，若您有更多意见或建议可以前往「github」提交问题，或参与开源开发。</Text>
      <HStack justifyContent="center">
        <Text>项目地址</Text>
        <Img cursor="pointer" src="https://img.shields.io/github/stars/xkinput/jd-dict-client?label=前端&style=social" onClick={() => open('https://github.com/xkinput/jd-dict-client')} />
        <Img cursor="pointer" src="https://img.shields.io/github/stars/xkinput/jd-dict-server?label=后端&style=social" onClick={() => open('https://github.com/xkinput/jd-dict-server')} />
      </HStack>
      <HStack justifyContent="center">
        <Text fontSize="sm">若您想要支持该项目，请您为以上项目点击Star哦</Text>
      </HStack>
    </Container>
  </>
}
