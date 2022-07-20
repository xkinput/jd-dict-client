import { store } from '~/store'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { SignInDocument, SignInMutation, UserSignInInput, FindUserMeDocument, FindUserMeQuery } from '~/generated/gql'
import { client } from '~/plugins/apollo'
import { mutateLog } from '~/utils/log'
import { setAuthKey } from '~/utils/tool'

export const signInUser = createAsyncThunk<string, UserSignInInput>(
  'user/signInUser',
  async (variables, { fulfillWithValue, rejectWithValue }) => {
    try {
      let { data: tokenData, errors } = await client.mutate<SignInMutation>({
        mutation: SignInDocument,
        variables: {
          data: variables
        }
      })

      let token = tokenData?.signIn?.token

      if (!token) throw rejectWithValue(errors)
      setAuthKey(token)

      return token
    } catch(e) {
      mutateLog(e as Error, {
        prefixTitle: '登录失败：'
      })
      throw rejectWithValue(e)
    }
  }
)

export const findUserMe = createAsyncThunk('user/fineUserMe', 
  async (_, { rejectWithValue, fulfillWithValue  }) => {
    try {
      let { data } = await client.query<FindUserMeQuery>({
        query: FindUserMeDocument,
        fetchPolicy: 'no-cache',
      })

      return data.findUserMe
    } catch(e) {
      mutateLog(e as Error, {
        prefixTitle: '登录失败：'
      })
      store.dispatch(logoutUser())
      throw rejectWithValue(e)
    }
  })

export const logoutUser = createAsyncThunk('user/logout', async () => {
  setAuthKey('')
})
