import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, ModalProps } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'

export interface DialogPhraseProps {
  isOpen: boolean
  cancelRef: NonNullable<ModalProps['initialFocusRef']>
  onClose: () => void
  content: {
    header?: string
    body?: string | ReactNode
    confirm?: string
  }
}

export const DialogPhrase: FC<DialogPhraseProps> = ({ isOpen, onClose, cancelRef, content }) => {
  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      size="xl"
      
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          { content.header &&
            <AlertDialogHeader  fontSize='lg' fontWeight='bold'>
              {content.header}
            </AlertDialogHeader>
          }

          { content.body && 
            <AlertDialogBody pt={6}>
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
