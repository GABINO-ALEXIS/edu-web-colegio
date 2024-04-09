import {
  Circulo,
  Seccion,
  Globo,
  Cuadro,
  MetaTags
} from '../../components'
import {
  HeroLayout,
  ImagenCuadroLayout
} from '../../layouts'
import {
  dadosIcon,
  computacionIcon,
  corriendoIcon,
  innovacionIcon,
  literaturaIcon,
  nubeIcon,
  cienciasIcon,
  comillasIcon
} from '../../assets/iconos'
import { imagenPrueba } from '../../assets/imagenes'
import { m } from 'framer-motion'
import './PrimariaPage.css'

const PrimariaPage = () => {
  return (
    <>
      <MetaTags
        title='Nivel Primaria | Colegio Particular Inmaculada Concepción de María'
        content='Bienvenidos al Colegio Inmaculada Concepción de María,
         donde enseñamos con amor y cultivamos valores
        sólidos, que forman la base de nuestra comunidad escolar, Inmaculada
        Concepción de María es más que una escuela, es un hogar escolar
        donde cada niño se siente valorado y apoyado, para aprender y prosperar
         en un ambiente de cuidado y compromiso.'
      />

      <div className='primariaPage'>
        <HeroLayout titulo='Nivel Primaria' />
        <div className='primariaDescripcionContent'>
          <Globo colorClaro='#7DCCC6' className='globoPP' />
          <Globo colorClaro='#FF9075' className='globoPP2' />
          <img
            src={nubeIcon}
            alt='icono de nube'
            className='nubePP'
          />
          <ImagenCuadroLayout
            texto={
              <>
                <p>
                  En este nivel, los estudiantes desarrollan
                  habilidades avanzadas en lectura, escritura y matemáticas,
                  fortaleciendo su comprensión y aplicación de conceptos.
                  Además, se fomenta el pensamiento crítico y la resolución
                  de problemas a través de actividades prácticas y colaborativas.
                  Nuestra metodología educativa se apoya en el enfoque por competencias,
                  promoviendo un aprendizaje significativo basado en las corrientes
                  cognitivas y sociales del aprendizaje, tal como lo establece
                  el Currículo Nacional de Educación Básica Regular y además
                  trabajamos en base a resultados con Actividades diarias de:
                </p><br />
                <ul>
                  <li>Formación en Valores ético-cristianos.</li>
                  <li>Desarrollo de habilidades para la lectura y escritura.</li>
                  <li>Situaciones de aprendizaje de contexto con material concreto.</li>
                  <li>Respeto por los demás y sus diferencias.</li>
                  <li>Formamos ciudadanos libres y cultos.</li>
                  <li>Música, multilingüe.</li>
                  <li>Promovemos estilos de vida saludable.</li>
                  <li> Manejo de las plataformas digitales.</li>
                </ul>
              </>
          }
            imagen={imagenPrueba}
            alt='imagen prueba'
          />
        </div>
        <Seccion
          claseAdicional='wavesStyles stylesPrimariaPage'
          wavesTopOpacity
        >
          <Circulo
            imagen={computacionIcon}
            alt='icono de computación'
            descripcion='Computación'
          />
          <Circulo
            imagen={corriendoIcon}
            alt='icono de corriendo'
            descripcion='Deportes'
          />
          <Circulo
            imagen={innovacionIcon}
            alt='icono de innovacion'
            descripcion='Innovación'
          />
          <Circulo
            imagen={literaturaIcon}
            alt='icono de literatura'
            descripcion='Literatura'
          />
          <Circulo
            imagen={cienciasIcon}
            alt='icono de ciencias'
            descripcion='Ciencias'
          />
        </Seccion>
        <div className='cuadroContent'>
          <m.span
            className='dadoContentPP'
            initial={{
              opacity: 0,
              y: -150
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              amount: 1,
              once: true
            }}
            transition={{
              duration: 1
            }}
          >
            <img src={dadosIcon} alt='icono de dados' />
          </m.span>
          <Cuadro clasesRayas='cuadroFrase'>
            <img
              src={comillasIcon}
              alt='icono de comillas'
              className='comillas'
            />
            Nuestros estudiantes desarrollan al máximo sus posibilidades
            de aprender a través de una interacción social.
          </Cuadro>
        </div>
      </div>
    </>
  )
}
export default PrimariaPage
