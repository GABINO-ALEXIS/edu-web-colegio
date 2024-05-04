import {
  setGaleriaPage,
  setNoticiasPage,
  setSomosPage
} from './'
import { leerDocsPagina, serializarFecha } from '../../colegio/helpers'

export const comenzarLeerPaginas = () => {
  return async (dispatch) => {
    try {
      const { planaDirectiva } = await leerDocsPagina('somosPage')
      const { fotos } = await leerDocsPagina('galeriaPage')
      const { noticias } = await leerDocsPagina('noticiasPage')

      const { planaDirectivaArray } = planaDirectiva
      const { fotosArray } = fotos
      const { noticiasArray } = noticias

      noticiasArray.reverse().forEach(element => {
        element.fecha = serializarFecha(element.fecha)
      })
      // const re = noticiasArray.map((element) => {
      //   return { ...element, fecha: serializarFecha(element.fecha) }
      // })

      dispatch(setSomosPage(planaDirectivaArray))
      dispatch(setGaleriaPage(fotosArray))
      dispatch(setNoticiasPage(noticiasArray))

      console.log(noticiasArray)
    } catch (e) {
      console.log(e)
    }
  }
}
