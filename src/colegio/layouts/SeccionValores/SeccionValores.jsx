import {
  mundoAzulIcon,
  mundoRosaIcon,
  mundoAmarilloIcon,
  arteIcon,
  mochilaIcon,
  medallaIcon
} from '../../assets/iconos'
import { OlasSVG, ValorItem } from '../../components'
import { m } from 'framer-motion'
import './SeccionValores.css'

export const SeccionValores = () => {
  return (
    <m.section
      className='seccionValores'
      animate={{
        opacity: [0, 1],
        y: [140, 0]
      }}
      transition={{
        duration: 1.5,
        staggerChildren: 0.3
      }}
    >
      <OlasSVG
        color1='#211C1C'
        color2='#2b2626'
        color3='#474545'
      />
      <div className='valores'>
        <ValorItem
          mundoIcon={mundoAzulIcon}
          sticker={arteIcon}
          titulo='Valores Fundamentales'
          descripcion='Enseñamos con amor y cultivamos
          valores sólidos que forman la base de nuestra
           comunidad escolar.'
          altImagen='sticker de arte'
        />
        <ValorItem
          mundoIcon={mundoRosaIcon}
          sticker={mochilaIcon}
          titulo='Un Hogar Escolar'
          descripcion='Inmaculada Concepción de María
           es más que una escuela, es un hogar escolar
           donde cada niño se siente valorado y apoyado.'
          altImagen='sticker de mochila'
        />
        <ValorItem
          mundoIcon={mundoAmarilloIcon}
          sticker={medallaIcon}
          titulo='Crecemos Juntos'
          descripcion='Nuestra misión es ayudar a cada
           estudiante a crecer, aprender y prosperar en
           un ambiente de cuidado y compromiso.'
          altImagen='sticker de medalla'
        />
        <OlasSVG
          color1='#211C1C'
          className='olasSVG2'
          color2='#2b2626'
          color3='#474545'
        />
      </div>

    </m.section>
  )
}
