import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { estructuraWebColegialSlice } from './colegio'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    estructuraWebColegial: estructuraWebColegialSlice.reducer
  }
})
