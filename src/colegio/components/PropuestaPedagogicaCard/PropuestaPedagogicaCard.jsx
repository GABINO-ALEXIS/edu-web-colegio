import './PropuestaPedagogicaCard.css'
import { m } from 'framer-motion'

export const PropuestaPedagogicaCard = ({ icono, alt, titulo, descripcion, color, delay }) => {
  return (
    <m.div
      className='propuestaPedagogicaCardContent'
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0, when: 'afterChildren' }}
      transition={{
        duration: 1.5,
        delay
      }}
      viewport={{
        once: true
      }}

    >
      <div className='pedagogiaIconContent'>
        <div
          className='pedagogiaIcon'
          style={{ backgroundColor: `${color}` }}
        >
          <img src={icono} alt={alt} />
        </div>
      </div>
      <div className='pedagogiaTexto'>
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
      </div>
    </m.div>
  )
}
