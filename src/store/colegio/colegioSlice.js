import { createSlice } from '@reduxjs/toolkit'

export const estructuraWebColegialSlice = createSlice({

  name: 'estructuraWebColegial',
  initialState: {
    isSaving: false,
    reading: false,
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
    setReading: (state) => {
      state.reading = true
    },
    setRead: (state) => {
      state.reading = false
    },
    setGuardando: (state) => {
      state.isSaving = true
    },
    setGuardado: (state, { payload }) => {
      state[payload.page][payload.arrayNom].push(payload.data)
      state.isSaving = false
      state.mensajeGuardado = payload.messageSaved
    },
    setEliminado: (state, { payload }) => {
      state[payload.page][payload.arrayNom] = state[payload.page][payload.arrayNom].filter((element) => element.id !== payload.id)
    },
    setAgregarSomosPage: (state, { payload }) => {
      state.somosPage.planaDirectiva.push(payload)
      state.isSaving = false
    },
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
  setNoticiasPage,
  setGuardando,
  setAgregarSomosPage,
  setGuardado,
  setReading,
  setRead,
  setEliminado
} = estructuraWebColegialSlice.actions
