import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const CreatePhraseModal: FC<Props> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return <>
    <Button colorScheme="gray" onClick={onOpen}>提交词条</Button>
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>提交词条</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {children}
        </ModalBody>
      </ModalContent>
    </Modal>
  </>
}
