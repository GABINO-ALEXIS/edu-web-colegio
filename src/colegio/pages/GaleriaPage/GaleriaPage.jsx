import { HeroLayout } from '../../layouts/HeroLayout/HeroLayout'
import { cuadro1 } from '../../assets/imagenes'
import { m } from 'framer-motion'
import './GaleriaPage.css'
import { MetaTags } from '../../components'

const GaleriaPage = () => {
  return (
    <>
      <MetaTags
        title='Galería | Colegio Particular Inmaculada Concepción de María'
        content='Bienvenidos al Colegio Inmaculada Concepción de María,
         donde enseñamos con amor y cultivamos valores
        sólidos, que forman la base de nuestra comunidad escolar, Inmaculada
        Concepción de María es más que una escuela, es un hogar escolar
        donde cada niño se siente valorado y apoyado, para aprender y prosperar
         en un ambiente de cuidado y compromiso.'
      />

      <div className='galeriaPage'>
        <HeroLayout titulo='Galería' />
        <div className='contenedorGaleria'>
          <h2>
            Un lugar donde los niños exploran, sueñan y aprenden con alegría
          </h2>
          <div className='galeriaContent'>
            <m.div
              className='imagenItem'
              whileInView={{
                opacity: [0, 1]
              }}
              transition={{
                duration: 1.5
              }}
              viewport={{
                once: true
              }}
            >
              <img
                src={cuadro1}
                alt=''
              />
            </m.div>
            <m.div
              className='imagenItem'
              whileInView={{
                opacity: [0, 1]
              }}
              transition={{
                duration: 1.5
              }}
              viewport={{
                once: true
              }}
            >
              <img
                src={cuadro1}
                alt=''
              />
            </m.div>
            <m.div
              className='imagenItem'
              whileInView={{
                opacity: [0, 1]
              }}
              transition={{
                duration: 1.5
              }}
              viewport={{
                once: true
              }}
            >
              <img
                src={cuadro1}
                alt=''
              />
            </m.div>
            <m.div
              className='imagenItem'
              whileInView={{
                opacity: [0, 1]
              }}
              transition={{
                duration: 1.5
              }}
              viewport={{
                once: true
              }}
            >
              <img
                src={cuadro1}
                alt=''
              />
            </m.div>
            <m.div
              className='imagenItem'
              whileInView={{
                opacity: [0, 1]
              }}
              transition={{
                duration: 1.5
              }}
              viewport={{
                once: true
              }}
            >
              <img
                src={cuadro1}
                alt=''
              />
            </m.div>
            <m.div
              className='imagenItem'
              whileInView={{
                opacity: [0, 1]
              }}
              transition={{
                duration: 1.5
              }}
              viewport={{
                once: true
              }}
            >
              <img
                src={cuadro1}
                alt=''
              />
            </m.div>
            <m.div
              className='imagenItem'
              whileInView={{
                opacity: [0, 1]
              }}
              transition={{
                duration: 1.5
              }}
              viewport={{
                once: true
              }}
            >
              <img
                src={cuadro1}
                alt=''
              />
            </m.div>
            <m.div
              className='imagenItem'
              whileInView={{
                opacity: [0, 1]
              }}
              transition={{
                duration: 1.5
              }}
              viewport={{
                once: true
              }}
            >
              <img
                src={cuadro1}
                alt=''
              />
            </m.div>
            <m.div
              className='imagenItem'
              whileInView={{
                opacity: [0, 1]
              }}
              transition={{
                duration: 1.5
              }}
              viewport={{
                once: true
              }}
            >
              <img
                src={cuadro1}
                alt=''
              />
            </m.div>
            <m.div
              className='imagenItem'
              whileInView={{
                opacity: [0, 1]
              }}
              transition={{
                duration: 1.5
              }}
              viewport={{
                once: true
              }}
            >
              <img
                src={cuadro1}
                alt=''
              />
            </m.div>
            <m.div
              className='imagenItem'
              whileInView={{
                opacity: [0, 1]
              }}
              transition={{
                duration: 1.5
              }}
              viewport={{
                once: true
              }}
            >
              <img
                src={cuadro1}
                alt=''
              />
            </m.div>
            <m.div
              className='imagenItem'
              whileInView={{
                opacity: [0, 1]
              }}
              transition={{
                duration: 1.5
              }}
              viewport={{
                once: true
              }}
            >
              <img
                src={cuadro1}
                alt=''
              />
            </m.div>
            <m.div
              className='imagenItem'
              whileInView={{
                opacity: [0, 1]
              }}
              transition={{
                duration: 1.5
              }}
              viewport={{
                once: true
              }}
            >
              <img
                src={cuadro1}
                alt=''
              />
            </m.div>
            <m.div
              className='imagenItem'
              whileInView={{
                opacity: [0, 1]
              }}
              transition={{
                duration: 1.5
              }}
              viewport={{
                once: true
              }}
            >
              <img
                src={cuadro1}
                alt=''
              />
            </m.div>
            <m.div
              className='imagenItem'
              whileInView={{
                opacity: [0, 1]
              }}
              transition={{
                duration: 1.5
              }}
              viewport={{
                once: true
              }}
            >
              <img
                src={cuadro1}
                alt=''
              />
            </m.div>

          </div>
        </div>
      </div>
    </>
  )
}
export default GaleriaPage
