import { configureStore } from '@reduxjs/toolkit'
import { colegioSlice } from './colegio'

export const store = configureStore({
  reducer: {
    colegio: colegioSlice.reducer
  }
})
