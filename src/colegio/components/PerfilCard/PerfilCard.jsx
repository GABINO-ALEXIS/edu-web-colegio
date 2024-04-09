import { m } from 'framer-motion'
import './PerfilCard.css'

export const PerfilCard = ({ imagen, alt, titulo, children, ejeY }) => {
  return (
    <m.div
      className='perfilCardContent'
      initial={{
        opacity: 0,
        y: ejeY
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 1.5
      }}
      viewport={{
        amount: 0.4,
        once: true
      }}

    >
      <div className='perfilCardImagen'>
        <img src={imagen} alt={alt} />
      </div>
      <div className='perfilCardDescripcion'>
        <h3>{titulo}</h3>
        <ol>
          {children}
        </ol>
      </div>
    </m.div>
  )
}
