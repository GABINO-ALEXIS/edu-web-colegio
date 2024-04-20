import { useSelector } from 'react-redux'
import { m } from 'framer-motion'

export const Galeria = () => {
  const { galeriaPage } = useSelector(state => state.estructuraWebColegial)
  const { fotos } = galeriaPage

  return (
    fotos.map(({ id, url, titulo }) => (
      <m.div
        key={id}
        className='imagenItem'
        whileInView={{
          opacity: [0, 1]
        }}
        transition={{
          duration: 1.5
        }}
        viewport={{
          once: true
        }}
      >
        <img
          src={url}
          alt={titulo}
        />
      </m.div>
    ))
  )
}
