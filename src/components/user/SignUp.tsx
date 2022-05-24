import { useMutation } from '@apollo/client'
import { CheckCircleIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputRightElement, ModalProps, Stack, useDisclosure } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import { FC, ReactNode, useEffect, useRef, useState } from 'react'
import * as Yup from 'yup'
import { SignUpDocument } from '~/generated/gql'
import { mutateLog } from '~/utils/log'

interface Props {
  onChange: (index: number) => void
}

export const SignUp: FC<Props> = ({ onChange }) => {
  const [ mutate ] = useMutation(SignUpDocument)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [ isPasswordShow, setIsPasswordShow ] = useState(false)

  const [ dialogProps, setDialogProps ] = useState<Omit<DialogSuccessProps, 'isOpen' | 'onClose'>>({
    cancelRef: useRef(),
    content: {
      header: '注册成功',
      body: '',
    }
  })

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          nickname: '',
          password: '',
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().min(3, '名称最少3位').max(30, '名称最大30位'),
          password: Yup.string().min(6, '密码最少6位').max(30, '密码最大30位'),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            let { data, errors } = await mutate({
              variables: {
                data: values
              }
            })

            if (!data.signUp) throw errors
            setSubmitting(false)
            setDialogProps(v => {
              v.content.body = (
                <>
                  <Stack alignItems="center">
                    <CheckCircleIcon color="green" fontSize="5xl" />
                    <div>
                      您的账户名：{data.signUp.name}，请前往登录页面登录
                    </div>
                  </Stack>
                </>
              )
              return v
            })
            onOpen()
          } catch(e) {
            mutateLog(e, {
              prefixTitle: '注册失败：'
            })
          }
        }}
      >
        {formik => {
          return (
            <Form>
              <Field name="name">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.name && form.touched.name}>
                    <FormLabel htmlFor='name'>登录名</FormLabel>
                    <Input {...field} />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="nickname">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.name && form.touched.name}>
                    <FormLabel htmlFor='nickname'>昵称</FormLabel>
                    <Input {...field} />
                    <FormErrorMessage>{form.errors.nickname}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="password">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.password && form.touched.password}>
                    <FormLabel htmlFor='password'>密码</FormLabel>
                    <InputGroup>
                      <Input {...field} type={isPasswordShow ? 'text' : 'password'}  />
                      <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={() => setIsPasswordShow(!isPasswordShow)}>
                          {isPasswordShow ? <ViewOffIcon/> : <ViewIcon/>}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                )}
              </Field>
              <Stack mt={4}>
                <Button colorScheme="teal" type="submit" isLoading={formik.isSubmitting}>注册</Button>
                <Button colorScheme="gray" onClick={() => onChange(0)}>已有账号？去登录</Button>
              </Stack>
            </Form>
          )
        }}
      </Formik>
      <DialogSuccess isOpen={isOpen} onClose={onClose} {...dialogProps} />
    </>
  )
}

interface DialogSuccessProps {
  isOpen: boolean
  cancelRef: ModalProps['initialFocusRef']
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
