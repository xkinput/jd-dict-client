import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import { FC, forwardRef, ReactNode, Ref, RefObject, useEffect, useImperativeHandle } from 'react'

interface Props {
  children: ReactNode
}

export const IssueContentModal = forwardRef<{ onOpen: any }, Props>(({ children }, ref) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  useImperativeHandle(ref, () => ({
    onOpen
  }))
  
  return <>
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent minWidth={[ 'full', 'full', 'container.md' ]}>
        <ModalHeader />
        <ModalCloseButton />
        <ModalBody>
          {children}
        </ModalBody>
        <ModalFooter />
      </ModalContent>
    </Modal>
  </>
})

IssueContentModal.displayName = 'IssueContentModal'
