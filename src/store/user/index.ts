import { createSlice } from '@reduxjs/toolkit'
import { User } from '~/generated/gql'
import { findUserMe, logoutUser, signInUser } from './actions'

export interface UserState {
  info?: Pick<User, 'id' | 'name' | 'nickname'>,
  token?: string,
  isLogin: boolean,
}

const initialState: UserState = {
  info: null,
  token: null,
  isLogin: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInUser.fulfilled, (state, action) => {
        state.token = action.payload
      })
      .addCase(findUserMe.fulfilled, (state, action) => {
        state.info = action.payload
        state.isLogin = true
      })
      .addCase(logoutUser.fulfilled, (state,action) => {
        state.info = null
        state.token = null
        state.isLogin = false
      })
  },
})

export const { setToken } = userSlice.actions

export default userSlice.reducer
