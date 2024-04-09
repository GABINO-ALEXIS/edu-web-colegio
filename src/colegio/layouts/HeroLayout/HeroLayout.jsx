import { Raya, WavesBottom } from '../../components'
import { estrellaIcon, circuloRojo } from '../../assets/iconos'
import { m } from 'framer-motion'
import './HeroLayout.css'

export const HeroLayout = ({ titulo }) => {
  return (
    <m.div
      className='heroLayout'
      initial={{
        opacity: 0,
        y: -140
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 0.8
      }}
    >
      <div className='titleHeroContent'>
        <img
          src={estrellaIcon}
          alt='icono de una estrella'
          className='estrellaIconHero'
        />
        <img
          src={estrellaIcon}
          alt='icono de una estrella'
          className='estrellaIconHero2'
        />
        <img
          src={circuloRojo}
          alt='icono de circuloRojo'
          className='circuloRojoHero'
        />
        <img
          src={circuloRojo}
          alt='icono de circuloRojo2'
          className='circuloRojoHero2'
        />
        <h2 className='titleHero'>
          {titulo}
          <Raya colorRaya='negro' />
        </h2>
      </div>
      <div className='imageHeroContent' />
      <WavesBottom colorFondo='wavesRojo' />
    </m.div>
  )
}
