import { Formik } from 'formik'
import { FC } from 'react'
import { PhraseType } from '~/generated/gql'

interface Props {

}

export const CreatePhrase: FC<Props> = () => {
  return (
    <>
      <Formik
        initialValues={{
          word: '',
          code: '',
          type: PhraseType,
          index: 0,
          tags: []
        }}
        onSubmit={async () => {

        }}
      >
        {formik => (
          <>
            asdf
          </>
        )}
      </Formik>
    </>
  )
}
