import {
  Cuadro,
  Globo,
  MetaTags,
  PerfilCard,
  Seccion
} from '../../components'
import { HeroLayout } from '../../layouts'
import { imagenPrueba } from '../../assets/imagenes'
import { mundoIcon, mundoIcon2 } from '../../assets/iconos'
import { m } from 'framer-motion'
import './MetodologiaPage.css'

const MetodologiaPage = () => {
  return (
    <>
      <MetaTags
        title='Metodología | Colegio Particular Inmaculada Concepción de María'
        content='Bienvenidos al Colegio Inmaculada Concepción de María,
         donde enseñamos con amor y cultivamos valores
        sólidos, que forman la base de nuestra comunidad escolar, Inmaculada
        Concepción de María es más que una escuela, es un hogar escolar
        donde cada niño se siente valorado y apoyado, para aprender y prosperar
         en un ambiente de cuidado y compromiso.'
      />

      <div className='metodologiaPage'>
        <HeroLayout titulo='Metodología' />
        <div className='metodologiaDescripcionContent'>
          <Globo colorClaro='#7DCCC6' className='globoMP' />
          <m.div
            className='metodologiaImagen'
            initial={{
              opacity: 0,
              x: -70
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
            <img src={imagenPrueba} alt='imagen de prueba' />
          </m.div>
          <Cuadro clasesCuadro='cuadroMetodologia'>
            Nuestra propuesta educativa se enfoca en potenciar
            las capacidades y habilidades de nuestros estudiantes
            para alcanzar sus metas de aprendizaje. Buscamos
            desarrollar en ellos el pensamiento crítico y
            reflexivo, fomentando la autonomía y el uso responsable
            de la tecnología en el mundo actual. Siguiendo el
            Currículo Nacional de la Educación Básica, nos
            comprometemos a cultivar competencias, capacidades
            y estándares educativos desde la etapa inicial hasta
            la secundaria, con la intención de formar egresados
            preparados. Además, integramos enfoques transversales,
            cumplimos con compromisos institucionales y aplicamos
            una evaluación formativa para mejorar constantemente
            el proceso de aprendizaje. En nuestra metodología,
            el constructivismo es el eje central que guía
            nuestra práctica educativa.
          </Cuadro>
        </div>
        <Seccion
          claseAdicional='wavesStyles stylesMetodologiaPage'
          wavesTopOpacity
        >
          <img
            src={mundoIcon}
            alt='icono de mundo'
            className='mundoIconMP'
          />
          <img
            src={mundoIcon2}
            alt='icono de mundo'
            className='mundoIconMP2'
          />
          <PerfilCard
            imagen={imagenPrueba}
            alt='imagen deprueba'
            titulo='Perfil del Estudiante'
            ejeY={-100}
          >
            <li>Valores ético-cristianos.</li>
            <li>Participación cívica activa.</li>
            <li>Excelencia académica.</li>
            <li>Comunicación clara y efectiva.</li>
            <li>Dominio tecnológico variado.</li>
            <li>Conservación del medio ambiente.</li>
          </PerfilCard>
          <PerfilCard
            imagen={imagenPrueba}
            alt='imagen deprueba'
            titulo='Plana Docente'
            ejeY={100}
          >
            <li>Profesores excelentes.</li>
            <li>Comprometidos con calidad educativa.</li>
            <li>Capacitados en todas áreas.</li>
            <li>Formación de alumnos desafiantes.</li>
            <li>Apuestan por la excelencia.</li>
            <li>Preparan para desafíos globales.</li>
          </PerfilCard>
        </Seccion>
        <div className='cuadroAMetodologia' />
      </div>
    </>
  )
}
export default MetodologiaPage
