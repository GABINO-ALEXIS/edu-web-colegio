import { m } from 'framer-motion'
import './Circulo.css'

export const Circulo = ({ imagen, alt, descripcion }) => {
  return (
    <m.div
      className='circuloContent'
      initial={{
        opacity: 0,
        scale: 0.3
      }}
      whileInView={{
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: 1
      }}
      viewport={{
        once: true
      }}
    >
      <div className='circuloC'>
        <img src={imagen} alt={alt} />
      </div>
      <h3>{descripcion}</h3>
    </m.div>
  )
}
