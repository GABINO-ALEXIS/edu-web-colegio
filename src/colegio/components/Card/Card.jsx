import { lapizIcon } from '../../assets/iconos'
import { Boton } from '../Boton/Boton'
import { m, AnimatePresence } from 'framer-motion'
import './Card.css'

const variantsParrafo = {
  initial: {
    opacity: 0,
    scale: 0.7
  },
  animate: {
    opacity: 1,
    scale: 1
  },
  exit: {
    opacity: 0,
    scale: 0.7
  },
  transition: {
    duration: 1
  }
}

export const Card = ({ titulo1, titulo2, titulo3, img, altImagen, redireccion }) => {
  return (
    <AnimatePresence>
      <m.div
        className='contenedorCard'
        initial={{
          opacity: 0,
          x: 50
        }}
        animate={{
          opacity: 1,
          x: 0
        }}
        exit={{
          x: -50,
          opacity: 0
        }}
        transition={{
          duration: 1.5
        }}
      >
        <m.div
          className='imagenCard'
          initial={{
            opacity: 0,
            x: 50
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          exit={{
            x: -50,
            opacity: 0

          }}
          transition={{
            duration: 1.4
          }}
        >
          <img src={img} alt={altImagen} />
        </m.div>
        <div className='descripcionCard'>
          <h3>
            <img src={lapizIcon} alt='Icono de lapiz' />
            {titulo1}
          </h3>
          <m.p
            {...variantsParrafo}
          >
            Conoce nuestro programa de preescolar, que se centra en el desarrollo
            temprano de habilidades cognitivas, sociales y motoras.
          </m.p>
          <h3>
            <img src={lapizIcon} alt='Icono de lapiz' />
            {titulo2}
          </h3>
          <m.p
            {...variantsParrafo}
          >
            Aceptamos estudiantes en edades de 3 a 5 años.
          </m.p>
          <h3>
            <img src={lapizIcon} alt='Icono de lapiz' />
            {titulo3}
          </h3>
          <m.p
            {...variantsParrafo}
          >
            Nuestro horario típico de preescolar y las opciones
            de tiempo completo y medio tiempo.
          </m.p>
          <Boton
            colorBorde='blanco'
            colorFondo='negro'
            texto='Leer más'
            redireccion={redireccion}
          />
        </div>

      </m.div>
    </AnimatePresence>
  )
}
