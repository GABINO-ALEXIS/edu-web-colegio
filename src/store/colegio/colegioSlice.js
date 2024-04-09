import { createSlice } from '@reduxjs/toolkit'

export const colegioSlice = createSlice({
  name: 'colegio',
  initialState: {
    counter: 10
  },
  reducers: {
    increment: (state /* action */) => {
      state.counter += 1
    }
  }
})

export const { increment } = colegioSlice.actions
