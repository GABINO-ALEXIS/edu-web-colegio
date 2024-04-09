import { m } from 'framer-motion'
import './DirectivaCard.css'

export const DirectivaCard = ({ imagen, alt, nombre, cargo, ejeX, delay }) => {
  return (

    <m.div
      className='directivaCardContent'
      initial={{
        x: ejeX,
        opacity: 0
      }}
      whileInView={{
        x: 0,
        opacity: 1
      }}
      transition={{
        duration: 1.3,
        delay
      }}
      viewport={{
        amount: 0.4,
        once: true
      }}
    >
      <div className='directivaCardSombra' />
      <div className='directivaCard'>
        <img src={imagen} alt={alt} />
      </div>
      <h5 className='directivaNombre'>{nombre}</h5>
      <p className='directivaCargo'>{cargo}</p>
    </m.div>

  )
}
