import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, ModalProps } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'

export interface DialogSuccessProps {
  isOpen: boolean
  cancelRef: NonNullable<ModalProps['initialFocusRef']>
  onClose: () => void
  content: {
    header?: string
    body?: string | ReactNode
    confirm?: string
  }
}

export const DialogSuccess: FC<DialogSuccessProps> = ({ isOpen, onClose, cancelRef, content }) => {
  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          { content.header &&
            <AlertDialogHeader  fontSize='lg' fontWeight='bold'>
              {content.header}
            </AlertDialogHeader>
          }

          { content.body && 
            <AlertDialogBody>
              { content.body}
            </AlertDialogBody>
          }

          <AlertDialogFooter>
            <Button onClick={() => onClose()}>
              { content.confirm || '确认' }
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}
