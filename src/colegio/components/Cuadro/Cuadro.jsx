import { m } from 'framer-motion'
import './Cuadro.css'

export const Cuadro = ({ children, clasesCuadro, clasesRayas }) => {
  return (
    <m.div
      className={`cuadro ${clasesCuadro}`}
      initial={{
        opacity: 0,
        x: 70
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
      <div className={`rayas ${clasesRayas}`}>
        {children}
      </div>
    </m.div>
  )
}
