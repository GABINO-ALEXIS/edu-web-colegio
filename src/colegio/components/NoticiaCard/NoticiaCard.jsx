import { m } from 'framer-motion'
import './NoticiaCard.css'

export const NoticiaCard = ({ imagen, alt, titulo, fecha: objFecha, contenido, ejeX, delay }) => {
  const milisegundos = objFecha.seconds * 1000
  const fecha = new Date(milisegundos)

  return (
    <m.div
      className='cardNoticia'
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
      <div className='face face1'>
        <div className='noticiaDescripcion'>
          <img src={imagen} alt={alt} />
          <h3>{titulo}</h3>
          <time dateTime='14-03-2024'>{fecha.getFullYear()}</time>
          {/* <time dateTime={fecha}>{fecha}</time> */}
        </div>
      </div>
      <div className='face face2'>
        <div className='noticiaDescripcion'>
          <p>{contenido}</p>
        </div>
      </div>
    </m.div>
  )
}
