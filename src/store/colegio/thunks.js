import { leerDocsPagina } from '../../colegio/helpers'
import { setGaleriaPage, setNoticiasPage, setSomosPage } from './'

export const comenzarLeerPaginas = () => {
  return async (dispatch) => {
    try {
      const { planaDirectiva } = await leerDocsPagina('somosPage')
      const { fotos } = await leerDocsPagina('galeriaPage')
      const { noticias } = await leerDocsPagina('noticiasPage')

      const { planaDirectivaArray } = planaDirectiva
      const { fotosArray } = fotos
      const { noticiasArray } = noticias

      dispatch(setSomosPage(planaDirectivaArray))
      dispatch(setGaleriaPage(fotosArray))
      // dispatch(setNoticiasPage(noticiasArray))

      console.log(noticiasArray)
    } catch (e) {
      console.log(e)
    }
  }
}
