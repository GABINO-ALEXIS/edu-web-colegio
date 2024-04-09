import { m } from 'framer-motion'
import './Noticia.css'

export const Noticia = ({ imagen, altImagen, fecha, contenido, ejeX, delay }) => {
  return (
    <m.div
      className='cajaNoticia'
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
      <div className='imagenNoticia'>
        <img src={imagen} alt={altImagen} />
      </div>
      <div className='datosNoticia'>
        <time>
          {fecha}
        </time>
        <p>
          {contenido}
        </p>
      </div>
    </m.div>
  )
}
