import { Modal, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, TabPanel, TabPanels, Tabs, useDisclosure } from '@chakra-ui/react'
import { FC, ReactNode, useState } from 'react'
import { Header, HeaderOnClickType } from '~/components/Header'
import { SignIn } from '~/components/user/SignIn'
import { SignUp } from '~/components/user/SignUp'
import { useRootDispatch } from '~/store'
import { logoutUser } from '~/store/user/actions'

interface Props {
  children?: ReactNode
}

export const DefaultLayout: FC<Props> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [ openPanelIndex, setOpenPanelIndex ] = useState(0)
  const [ modalTitle, setModalTitle ] =  useState('登录')
  const modalTitleLib =  [ '登录', '注册' ]

  const dispatch = useRootDispatch()

  function onHeaderOnClick(data: HeaderOnClickType) {
    if (data === HeaderOnClickType.Logout) {
      dispatch(logoutUser())
      return
    }
    onOpen()
    setOpenPanelIndex(data)
    setModalTitle(modalTitleLib[data])
  }

  function onChange(index: number) {
    setOpenPanelIndex(index)
    setModalTitle(modalTitleLib[index])
  }

  return (
    <>
      <Header onTrigger={onHeaderOnClick} />
      {children}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalTitle}</ModalHeader>
          <ModalCloseButton />
          <Tabs index={openPanelIndex}>
            <TabPanels>
              <TabPanel>
                <SignIn onSigned={onClose} onChange={onChange}/>
              </TabPanel>
              <TabPanel>
                <SignUp onChange={onChange}/>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalContent>
      </Modal>
    </>
  )
}
