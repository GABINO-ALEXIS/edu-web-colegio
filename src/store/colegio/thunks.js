import {
  setEliminado,
  setGaleriaPage,
  setGuardado,
  setGuardando,
  setNoticiasPage,
  setRead,
  setReading,
  setSomosPage
} from './'
import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDoc,
  updateDoc
} from 'firebase/firestore/lite'
import { leerDocsPagina } from '../../colegio/helpers'
import { FirebaseDB } from '../../firebase/config'

export const comenzarLeerPaginas = () => {
  return async (dispatch) => {
    try {
      dispatch(setReading())
      const { planaDirectiva } = await leerDocsPagina('somosPage')
      const { fotos } = await leerDocsPagina('galeriaPage')
      const { noticias } = await leerDocsPagina('noticiasPage')

      const { planaDirectivaArray } = planaDirectiva
      const { fotosArray } = fotos
      const { noticiasArray } = noticias
      noticiasArray.reverse()

      dispatch(setSomosPage(planaDirectivaArray))
      dispatch(setGaleriaPage(fotosArray))
      dispatch(setNoticiasPage(noticiasArray))
      dispatch(setRead())
    } catch (e) {
      console.log(e)
    }
  }
}

export const agregarData = (coleccion, documento, nomArray, data) => {
  return async (dispatch) => {
    dispatch(setGuardando())

    const docRef = doc(collection(FirebaseDB, `/estructuraWebColegial/paginas/${coleccion}`), documento)
    await updateDoc(docRef, {
      [nomArray]: arrayUnion(data)
    })

    dispatch(setGuardado({
      page: coleccion,
      arrayNom: nomArray.slice(0, -5),
      data,
      messageSaved: 'Agregado con éxito'
    }))
  }
}

export const eliminarData = (coleccion, documento, nomArray, idDelete) => {
  return async (dispatch) => {
    // dispatch(setGuardando())
    const id = parseInt(idDelete)
    const docRef = doc(collection(FirebaseDB, `/estructuraWebColegial/paginas/${coleccion}`), documento)
    const arrayFireStore = (await getDoc(docRef)).data()[nomArray]

    await updateDoc(docRef, {
      [nomArray]: arrayRemove(arrayFireStore.find((element) => element.id === id))
    })
    dispatch(setEliminado({
      page: coleccion,
      arrayNom: nomArray.slice(0, -5),
      id
    }))
    // dispatch(setGuardado('Eliminado con éxito'))
  }
}
