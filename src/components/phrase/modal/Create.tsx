import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import { FC, ReactNode, useEffect } from 'react'

interface Props {
  children: ReactNode
}

export const CreatePhraseModal: FC<Props> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    onOpen()
  }, [])
  
  return <>
    <Button colorScheme="gray" onClick={onOpen}>创建议题</Button>
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>创建议题</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {children}
        </ModalBody>
      </ModalContent>
    </Modal>
  </>
}
