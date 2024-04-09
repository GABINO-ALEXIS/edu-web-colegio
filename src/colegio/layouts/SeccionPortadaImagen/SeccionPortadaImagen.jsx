import {
  mundoIcon,
  mundoIcon2,
  manchaRoja,
  rayaIcon,
  estrellaIcon
} from '../../assets/iconos'
import { ninaPizarra } from '../../assets/imagenes'
import { m } from 'framer-motion'
import './SeccionPortadaImagen.css'

export const SeccionPortadaImagen = () => {
  return (
    <section className='contenedorPortadaI'>
      <div className='cajaTitulos'>
        <img
          src={estrellaIcon}
          className='estrellaIcon'
          alt='icono de estrella'
        />
        <img
          src={manchaRoja}
          className='manchaRojaIcon manchaRojaIcon2'
          alt='icono de mancha'
        />
        <h1
          className='bienvenidos'
        >Bienvenidos al Colegio Inmaculada Concepción de María
        </h1>
        <m.h2
          className='educando'
          animate={{
            opacity: [0, 1],
            y: [50, 0]
          }}
          transition={{
            duration: 1.5
          }}
        >
          <span>Educando</span> con Pasión y
          <span> Compromiso</span>
        </m.h2>
        <img
          src={rayaIcon}
          className='rayaIcon'
          alt='icono de raya'
        />
        <img
          src={mundoIcon2}
          className='svgMundo2'
          alt='icono de tierra'
        />
        <img
          src={estrellaIcon}
          className='estrellaIcon3'
          alt='icono de estrella'
        />
        <img
          src={estrellaIcon}
          className='estrellaIcon3 estrellaIcon4'
          alt='icono de estrella'
        />
      </div>

      <div className='cajaImagen'>
        <img
          src={estrellaIcon}
          className='estrellaIcon estrellaIcon5'
          alt='icono de estrella'
        />
        <m.div
          className='imagen'
          animate={{
            opacity: [0, 1],
            y: [50, 0]
          }}
          transition={{
            duration: 1.5
          }}
        >
          <img
            src={ninaPizarra}
            alt='Niña Pegando dibujos en la pizarra'
          />
        </m.div>
        <img
          src={mundoIcon}
          className='svgMundo'
          alt='icno de tierra'
        />
        <img
          src={manchaRoja}
          className='manchaRojaIcon'
          alt='icono de mancha'
        />
        <img
          src={estrellaIcon}
          className='estrellaIcon estrellaIcon2'
          alt='icono de estrella'
        />
      </div>

    </section>
  )
}
