import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'verificando',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
  },
  reducers: {
    login: (state, { payload }) => {
      state.status = 'autenticado'
      state.uid = payload.uid
      state.email = payload.email
      state.displayName = payload.displayName
      state.photoURL = payload.photoURL || ''
      state.errorMessage = null
    },
    verificandoCredenciales: (state) => {
      state.status = 'verificando'
    },
    logout: (state, { payload }) => {
      state.status = 'no-autenticado'
      state.uid = null
      state.email = null
      state.displayName = null
      state.photoURL = null
      state.errorMessage = payload?.errorMessage ?? null
    }
  }
})

export const { login, verificandoCredenciales, logout } = authSlice.actions
