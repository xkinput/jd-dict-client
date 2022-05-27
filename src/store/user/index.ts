import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { User } from '~/generated/gql'
import { RootState } from '..'
import { findUserMe, logoutUser, signInUser } from './thunks'

export interface UserState {
  info?: Pick<User, 'id' | 'name' | 'nickname'>,
  token?: string,
  isSingined: boolean,
}

const initialState: UserState = {
  info: null,
  token: null,
  isSingined: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload
    },
    clearToken(state) {
      state.token = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInUser.fulfilled, (state, action) => {
        state.token = action.payload
      })
      .addCase(findUserMe.fulfilled, (state, action) => {
        state.info = action.payload
        state.isSingined = true
      })
      .addCase(logoutUser.fulfilled, (state,action) => {
        state.info = null
        state.token = null
        state.isSingined = false
      })
  },
})

export const { setToken } = userSlice.actions

export default userSlice.reducer
