import { useSelector } from 'react-redux'
import { NoticiaCard } from '../'
import { imagenPrueba } from '../../assets/imagenes'
export const Noticias = () => {
  const { noticiasPage } = useSelector((state) => state.estructuraWebColegial)
  const { noticias } = noticiasPage
  console.log(noticias)
  return (
    noticias.map(({ imagen, fecha, titulo, contenido }) => (
      <NoticiaCard
        key={fecha}
        imagen={imagen}
        alt={titulo}
        titulo={titulo}
        fecha={fecha}
        contenido={contenido}
      />
    ))
  )
}
