import { useSelector } from 'react-redux'
import { NoticiaCard } from '../'

export const Noticias = () => {
  const { noticiasPage } = useSelector((state) => state.estructuraWebColegial)
  const { noticias } = noticiasPage

  return (
    noticias.map(({ id, imagen, fecha, titulo, contenido }) => (
      <NoticiaCard
        key={id}
        imagen={imagen}
        alt={titulo}
        titulo={titulo}
        fecha={fecha}
        contenido={contenido}
      />
    ))
  )
}
