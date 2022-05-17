import { useRef, useState, useTransition} from 'react'
import { Box, Button, Center, Container, HStack, IconButton, Input, Spacer } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon, SpinnerIcon, StarIcon } from '@chakra-ui/icons'
import { sleep } from '../../utils/tool'
import { Outlet } from 'react-router-dom'

export default function UseTransition() {
  const [margin, setMargin] = useState(5)
  const [colorDeep, setColorDeep] = useState(500)

  const [isSetting, startSetting] = useTransition()
  const descStyle = `mx-${margin} text-red-${colorDeep}`

  function sub() {
    startSetting(() => {
      setTimeout(() => {
        setMargin( margin - 1)
        if (colorDeep > 100)
          setColorDeep(colorDeep - 100)
      }, 1000)
    })
  }

  function add() {
    startSetting(() => {
      setMargin( margin + 1)
      if (colorDeep < 800)
        setColorDeep(colorDeep + 100)
    })
  }

  return (
    <>
      <Container>
      isSetting: {isSetting.toString()}
        <HStack>
          <Box>
            margin: {margin}
          </Box>
          <Box>
            colorDeep: {colorDeep}
          </Box>
        </HStack>
        <Center className='my-5'>
          <IconButton
            aria-label='ChevronLeftIcon'
            icon={<ChevronLeftIcon />}
            onClick={sub}
          />
          {isSetting ? <SpinnerIcon/> : <StarIcon className='mx-5' w={10} h={10}/>}
          <IconButton
            aria-label='ChevronRightIcon'
            icon={<ChevronRightIcon />}
            onClick={add}
          />
        </Center>
        <Center>
          <p className={descStyle}>123456</p>
          <p className={descStyle}>789101</p>
        </Center>
      </Container>

      <Outlet />
    </>
  )
}
