import { useSelector, useDispatch } from 'react-redux'
import { DirectivaCard } from '../'

export const PlanaDirectiva = () => {
  const { somosPage } = useSelector((state) => state.estructuraWebColegial)
  const { planaDirectiva } = somosPage

  return (
    planaDirectiva.map(({ id, foto, nombre, ocupacion }, index) => (
      <DirectivaCard
        key={id}
        imagen={foto}
        alt={nombre}
        nombre={nombre}
        cargo={ocupacion}
        ejeX={200}
        delay={index - 0.7}
      />
    ))
  )
}
