import {
  SeccionPortadaImagen,
  SeccionValores
} from '../../layouts'
import {
  Boton,
  Raya,
  Seccion,
  Tabs,
  Globo
  , NoticiaCard
} from '../../components'
import {
  astronautaIcon,
  coheteIcon,
  flechaIcon
} from '../../assets/iconos'
import { pergamino } from '../../assets/imagenes'
import { Link } from 'react-router-dom'
import { m } from 'framer-motion'
import './Main.css'

const imagenPrueba = 'https://img.freepik.com/foto-gratis/diversos-ninos-leyendo-libros_53876-146406.jpg?w=740&t=st=1702757210~exp=1702757810~hmac=a03d2e35488e6b4e99c3590bf2e57e6f3284c52221a48c3ac6d3716df9303066'

const variants = {

  izquierdaDerecha: (px) => ({
    opacity: 0,
    x: px
  }),
  derechaIzquierda: (px) => ({
    opacity: 0,
    x: px
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2
    }
  }
}

const animacionGridItem = {
  initial: {
    scale: 0.4,
    opacity: 0
  },
  whileInView: {
    scale: 1,
    opacity: 1
  },
  transition: {
    duration: 0.9
  },
  viewport: {
    amount: 0.3,
    once: true
  }
}

export const Main = () => {
  return (
    <main>

      <section className='portada'>
        <SeccionPortadaImagen />
        <SeccionValores />
      </section>

      <Seccion claseAdicional='stylesHistoria'>
        <Globo colorClaro='#FF9075' className='globo' />
        <Globo colorClaro='#7DCCC6' className='globo2' />
        <div className='contenedorHistoria'>
          <m.div
            className='imagenHistoria'
            initial='izquierdaDerecha'
            custom={-70}
            whileInView='visible'
            viewport={{
              amount: 0.4,
              once: true
            }}
            variants={variants}
          >
            <img
              src={pergamino}
              alt='Imagen de Insignia Antigua'
            />
          </m.div>
          <m.div
            className='textoHistoria'
            initial='derechaIzquierda'
            custom={70}
            whileInView='visible'
            viewport={{
              amount: 0.3,
              once: true
            }}
            variants={variants}
          >
            <h2 className='nuestraHistoria'>
              Nuestra Historia:
              <Raya />
            </h2>
            <h2
              className='compromiso'
            >
              <span className='edu'>Educando </span>
              <span className='comp'>Compromiso Educativo </span> desde 2001
              <Raya colorRaya='amarillo' />
            </h2>
            <p>A lo largo de los años, hemos ayudado a miles de estudiantes
              a crecer, aprender y prosperar en un ambiente de cuidado y compromiso.
              Hoy, continuamos dedicados a nuestra misión de proporcionar una
              educación de calidad que prepara a los estudiantes para un futuro brillante.
            </p>
            <Boton
              colorBorde='negro'
              colorFondo='amarillo'
              texto='Leer más'
              redireccion='/historia'
            />
          </m.div>
        </div>
      </Seccion>

      <Seccion claseAdicional='stylesNiveles wavesStyles' waves>
        <div className='contenedorNiveles'>
          <m.h2
            initial='derechaIzquierda'
            custom={70}
            whileInView='visible'
            viewport={{
              amount: 0.4,
              once: true
            }}
            variants={variants}
          >Nuestros Niveles <Raya />
          </m.h2>
          <m.p
            initial='derechaIzquierda'
            custom={70}
            whileInView='visible'
            viewport={{
              amount: 0.4,
              once: true
            }}
            variants={variants}
          >
            En Inmaculada Concepción de María, ofrecemos una
            educación excepcional en dos niveles clave: preescolar
            y primaria. Adaptamos nuestro enfoque a cada etapa
            del desarrollo, brindando a los estudiantes una base
            sólida para su éxito académico y personal.
          </m.p>
          <m.span
            initial='izquierdaDerecha'
            custom={-70}
            whileInView='visible'
            viewport={{
              amount: 0.4,
              once: true
            }}
            variants={variants}
          >
            <Tabs />
          </m.span>
        </div>
      </Seccion>

      <Seccion>
        <div className='contenedorFotos'>
          <h2>
            Nuestra Galería de Fotos
            <Raya />
          </h2>
          <div className='fotos'>
            <m.div
              className='foto1'
              {...animacionGridItem}
            >
              <img src='https://img.freepik.com/foto-gratis/diversos-ninos-leyendo-libros_53876-146406.jpg?w=740&t=st=1702757210~exp=1702757810~hmac=a03d2e35488e6b4e99c3590bf2e57e6f3284c52221a48c3ac6d3716df9303066' alt='' />
            </m.div>
            <m.div
              className='foto2'
              {...animacionGridItem}

            >
              <img src='https://img.freepik.com/foto-gratis/lindo-grupo-amigos-preescolar-tirados-pasto-sonriendo-pasando-buen-rato-juntos_662251-1782.jpg?w=1060&t=st=1702757866~exp=1702758466~hmac=58da28ec4e618e8f52848276403f82436f48f2d3e14ebace2747f8c84083acac' alt='' />
            </m.div>
            <m.div
              className='foto3'
              {...animacionGridItem}

            >
              <img src='https://img.freepik.com/foto-gratis/grupo-ninos-pizarra_23-2148107413.jpg?w=1060&t=st=1702757905~exp=1702758505~hmac=45ce7b70c66c8e90a416348a05329ea1a80e179298f727f7d9fc8d8084dfc06a' alt='' />
            </m.div>
            <m.div
              className='foto4'
              {...animacionGridItem}

            >
              <img src='https://img.freepik.com/foto-gratis/ninos-tiro-medio-sentados-juntos-mesa_23-2149355251.jpg?w=1060&t=st=1702757932~exp=1702758532~hmac=66ba73a128435865b0a9596ee8997bc3401f2b38cc9d42d18f133166d29422eb' alt='' />
              <Link
                className='verMasFotos'
                to='/galeria'
              >...
              </Link>
            </m.div>
          </div>
        </div>
      </Seccion>

      <Seccion
        claseAdicional='stylesLlamanos wavesStyles'
        wavesReverse
      >
        <Globo colorClaro='#7DCCC6' className='globo3' />
        <img
          src={astronautaIcon}
          alt='icono de astronauta'
          className='astronautaIcon'
        />
        <img
          src={coheteIcon}
          alt='icono de cohete'
          className='coheteIcon'
        />
        <div className='contenedorLlamanos'>
          <p>Siempre Listos Para Ayudarte. Llámanos</p>
          <p>123456789 Ó</p>
          <Boton
            colorBorde='negro'
            colorFondo='blanco'
            texto='Inscribirse en Línea'
            redireccion='#'
          />
        </div>
      </Seccion>

      <Seccion>
        <div className='contenedorNoticias'>
          <h2>Últimas Noticias <Raya /></h2>

          <div className='subContenedorN'>
            <NoticiaCard
              imagen={imagenPrueba}
              alt='imagen...'
              titulo='titulo de la noticia'
              fecha='14-03-2024'
              contenido='Lorem ipsum dolor sit amet consectetur
              ,met consectetur, met consectetur, met consectetur
              ,met consectetur, met consectetur, adipisicing elit.
              Tempora quaerat suscipit fuga perspiciatis harum
              esse iusto quia, voluptas commodi nihil necessitatibus
              consequuntur? Consequuntur beatae vero commodi nihil
              provident esse fuga?'
              ejeX={200}
            />
            <NoticiaCard
              imagen={imagenPrueba}
              alt='imagen...'
              titulo='titulo de la noticia'
              fecha='14-03-2024'
              contenido='Lorem ipsum dolor sit amet consectetur
              ,met consectetur, met consectetur, met consectetur
              ,met consectetur, met consectetur, adipisicing elit.
              Tempora quaerat suscipit fuga perspiciatis harum
              esse iusto quia, voluptas commodi nihil necessitatibus
              consequuntur? Consequuntur beatae vero commodi nihil
              provident esse fuga?'
              ejeX={200}
              delay={0.3}
            />
            <NoticiaCard
              imagen={imagenPrueba}
              alt='imagen...'
              titulo='titulo de la noticia'
              fecha='14-03-2024'
              contenido='Lorem ipsum dolor sit amet consectetur
              ,met consectetur, met consectetur, met consectetur
              ,met consectetur, met consectetur, adipisicing elit.
              Tempora quaerat suscipit fuga perspiciatis harum
              esse iusto quia, voluptas commodi nihil necessitatibus
              consequuntur? Consequuntur beatae vero commodi nihil
              provident esse fuga?'
              ejeX={200}
              delay={0.4}
            />
          </div>
          <Link to='/noticias' className='verMasNoticias'>
            Ver más Noticias <img src={flechaIcon} alt='Icono de flecha' />
          </Link>
        </div>
      </Seccion>

    </main>

  )
}
