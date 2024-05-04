import { createSlice } from '@reduxjs/toolkit'

export const estructuraWebColegialSlice = createSlice({
  name: 'estructuraWebColegial',
  initialState: {
    isSaving: false,
    mensajeGuardado: '',
    inicioPage: {},
    historiaPage: {},
    somosPage: {
      planaDirectiva: []
    },
    galeriaPage: {
      fotos: []
    },
    admisionPage: {},
    inicialPage: {},
    primariaPage: {},
    metodologiaPage: {},
    noticiasPage: {
      noticias: []
    },
    contactenosPage: {}
  },
  reducers: {
    setSomosPage: (state, { payload }) => {
      state.somosPage.planaDirectiva = payload
    },
    setGaleriaPage: (state, { payload }) => {
      state.galeriaPage.fotos = payload
    },
    setNoticiasPage: (state, { payload }) => {
      state.noticiasPage.noticias = [...payload]
    }
  }
})

export const {
  setSomosPage,
  setGaleriaPage,
  setNoticiasPage
} = estructuraWebColegialSlice.actions
