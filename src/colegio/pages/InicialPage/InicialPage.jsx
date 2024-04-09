import {
  Cuadro
} from '../../components/Cuadro/Cuadro'
import {
  HeroLayout
} from '../../layouts/HeroLayout/HeroLayout'
import {
  IoIosCheckmarkCircle
} from 'react-icons/io'
import {
  MetaTags,
  PropuestaPedagogicaCard,
  Raya,
  Seccion
} from '../../components'
import {
  imagenPrueba
} from '../../assets/imagenes'
import {
  proyectoIcon,
  manosIcon,
  plastilinaIcon,
  trenIcon,
  vistaIcon,
  unidosIcon,
  globosIcon,
  nubeIcon2
} from '../../assets/iconos'
import { m } from 'framer-motion'
import './InicialPage.css'

const InicialPage = () => {
  return (
    <>
      <MetaTags
        title='Nivel Inicial | Colegio Particular Inmaculada Concepción de María'
        content='Bienvenidos al Colegio Inmaculada Concepción de María,
         donde enseñamos con amor y cultivamos valores
        sólidos, que forman la base de nuestra comunidad escolar, Inmaculada
        Concepción de María es más que una escuela, es un hogar escolar
        donde cada niño se siente valorado y apoyado, para aprender y prosperar
         en un ambiente de cuidado y compromiso.'
      />

      <div className='inicialPage'>
        <HeroLayout titulo='Nivel Inicial' />
        <div className='inicialPageContent'>
          <img
            src={nubeIcon2}
            alt='icono de nube'
            className='nubeIP'
          />
          <m.div
            className='inicialPageImagen'
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
            <img src={imagenPrueba} alt='imagen del nivel inicial' />
          </m.div>
          <div className='inicialPageTexto'>
            <img
              src={globosIcon}
              alt='icono de globos'
              className='globosIP'
            />
            <Cuadro>
              En nuestro colegio, entendemos que los niños pequeños necesitan
              ser respetados y atendidos de manera integral. Creemos que aprender
              no solo se trata de adquirir conocimientos, sino también de explorar,
              crear y relacionarse con el mundo que los rodea. Por eso, nos
              comprometemos a ofrecerles un ambiente donde se sientan seguros
              y valorados, y donde tengan la oportunidad de desarrollarse plenamente,
              tanto emocional como intelectualmente, durante su etapa inicial en la escuela.
            </Cuadro>
            <ul className='valoresList'>
              <li>
                <IoIosCheckmarkCircle
                  className='valorListCheck'
                />
                Respeto
              </li>
              <li>
                <IoIosCheckmarkCircle
                  className='valorListCheck'
                />
                Responsabilidad
              </li>
              <li>
                <IoIosCheckmarkCircle
                  className='valorListCheck'
                />
                Honradez
              </li>
              <li>
                <IoIosCheckmarkCircle
                  className='valorListCheck'
                />
                Amor
              </li>
            </ul>
          </div>
        </div>
        <Seccion
          claseAdicional='wavesStyles stylesInicialPage'
          wavesTopOpacity
        >
          <h2 className='contamosCon'>
            Contamos con:
            <Raya />
          </h2>
          <m.div
            className='contenedorPedagogica'
            initial={{
              opacity: 0
            }}
            whileInView={{
              opacity: 1
            }}
            transition={{
              duration: 1,
              when: 'beforeChildren',
              staggerChildren: 1
            }}
            viewport={{
              once: true
            }}
          >
            <PropuestaPedagogicaCard
              icono={proyectoIcon}
              alt='icono de proyectos'
              titulo='Aprendizaje por proyectos'
              descripcion='Juntos, aprendemos mientras
             hacemos cosas emocionantes.'
            />
            <PropuestaPedagogicaCard
              icono={manosIcon}
              alt='icono de manos'
              titulo='Actividades psicomotoras'
              descripcion='Nos movemos y jugamos para ser más fuertes y ágiles.'
              color='#B6F1B9'
              delay={0.2}
            />
            <PropuestaPedagogicaCard
              icono={plastilinaIcon}
              alt='icono de plastilina'
              titulo='Grafomotricidad y plastilina'
              descripcion='Dibujamos y moldeamos para escribir mejor
             y ser súper creativos.'
              color='#ECF4D4'
              delay={0.4}
            />
            <PropuestaPedagogicaCard
              icono={trenIcon}
              alt='icono de tren'
              titulo='Exploración y manipulación'
              descripcion='Descubrimos juguetes y cosas interesantes
             para jugar y aprender cada día.'
              color='#EE9096'
              delay={0.6}
            />
            <PropuestaPedagogicaCard
              icono={vistaIcon}
              alt='icono de vista'
              titulo='Actividades sensoriales'
              descripcion='Exploramos con nuestros sentidos para
            descubrir texturas, olores, sabores y sonidos nuevos.'
              color='#A59765'
              delay={0.8}
            />
            <PropuestaPedagogicaCard
              icono={unidosIcon}
              alt='icono de unidos'
              titulo='Juegos cooperativos'
              descripcion='Jugamos juntos para aprender a
            trabajar en equipo, compartir y respetar a los demás.'
              color='#ADA4A4'
              delay={1}
            />
          </m.div>
        </Seccion>
        <div className='cuadroAmarillo' />
      </div>
    </>
  )
}

export default InicialPage
