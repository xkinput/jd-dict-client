import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import appSlice from './app'
import userSlice from './user'

export const store = configureStore({
  reducer: {
    app: appSlice,
    user: userSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch

export const useRootDispatch = () => useDispatch<RootDispatch>()
export const useRootState = <T extends (state: RootState) => any>(selector: T): ReturnType<T> => useSelector(selector)

export const getRootState = (): RootState => store.getState()
