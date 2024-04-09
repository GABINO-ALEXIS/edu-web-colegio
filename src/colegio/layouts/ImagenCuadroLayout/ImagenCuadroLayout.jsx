import { Cuadro } from '../../components'
import { m } from 'framer-motion'
import './ImagenCuadroLayout.css'

export const ImagenCuadroLayout = ({ texto, imagen, alt }) => {
  return (
    <div
      className='imagenCuadroLayout'
    >
      <m.div
        className='imageCuadro'
        initial={{
          opacity: 0,
          x: -70
        }}
        whileInView={{
          opacity: 1,
          x: 0
        }}
        viewport={{
          amount: 0.4,
          once: true
        }}
        transition={{
          duration: 1.8
        }}
      >
        <img src={imagen} alt={alt} />
      </m.div>
      <Cuadro
        clasesCuadro='positionAbsolute'
      >
        {texto}
      </Cuadro>
    </div>
  )
}
