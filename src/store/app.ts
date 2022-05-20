import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AppState {
  value: number
}

const initialState: AppState = {
  value: 0,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment } = appSlice.actions

export default appSlice.reducer
