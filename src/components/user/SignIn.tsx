import { Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, InputGroup, InputRightElement, Stack } from '@chakra-ui/react'
import { FC, ReactNode, useState } from 'react'
import * as Yup from 'yup'
import { Field, Form, Formik } from 'formik'
import { mutateLog } from '~/utils/log'
import { findUserMe, signInUser } from '~/store/user/thunks'
import { useRootDispatch } from '~/store'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

interface Props {
  children?: ReactNode
  onSigned?: () => void
  onChange?: (index: number) => void
}
export const SignIn: FC<Props> = ({ onSigned, onChange }) => {
  const [ isPasswordShow, setIsPasswordShow ] = useState(false)
  const dispatch = useRootDispatch()

  return (<Formik
    initialValues={{
      name: '',
      password: ''
    }}
    validationSchema={Yup.object().shape({
      name: Yup.string().min(3, '名称最少3位').max(30, '名称最大30位').required('必填'),
      password: Yup.string().min(6, '密码最少6位').max(30, '密码最大30位').required('必填'),
    })}
    onSubmit={async (values, { setSubmitting }) => {
      try {
        let signInRes = await dispatch(signInUser(values))

        if (signInRes.meta.requestStatus === 'rejected') return

        let findMeRes = await dispatch(findUserMe())

        if (findMeRes.meta.requestStatus === 'rejected') return
        
        setSubmitting(false)
        onSigned()
      } catch(e) {
        mutateLog(e, {
          prefixTitle: '登录失败：'
        })
      }
    }}
  >
    {formik => (
      <Form>
        <Field name='name' >
          {({ field, form }) => (
            <FormControl isInvalid={form.errors.name && form.touched.name}>
              <FormLabel htmlFor='name'>登录名</FormLabel>
              <Input {...field} />
              <FormErrorMessage>{form.errors.name}</FormErrorMessage>
            </FormControl>
          )}
        </Field>
        <Field name='password'>
          {({ field, form }) => (
            <FormControl isInvalid={form.errors.password && form.touched.password}>
              <FormLabel htmlFor='password'>密码</FormLabel>
              <InputGroup>
                <Input {...field} type={isPasswordShow ? 'text' : 'password'}/>
                <InputRightElement width='4.5rem'>
                  <Button h='1.75rem' size='sm' onClick={() => setIsPasswordShow(!isPasswordShow)}>
                    {isPasswordShow ? <ViewOffIcon/> : <ViewIcon/>}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>{form.errors.password}</FormErrorMessage>
            </FormControl>
          )}
        </Field>
        <Stack mt={4}>
          <Button
            colorScheme='teal'
            isLoading={formik.isSubmitting}
            type='submit'
          >
          登录
          </Button>
          <Button colorScheme="gray" onClick={() => onChange(1)}>没有账号？去注册</Button>
        </Stack>
      </Form>
    )}
  </Formik>
  )
}
