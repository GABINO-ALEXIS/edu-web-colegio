import {
  HeroLayout,
  ImagenCuadroLayout
} from '../../layouts'
import {
  imagenPrueba
} from '../../assets/imagenes'
import {
  DirectivaCard,
  Globo,
  Raya,
  Seccion,
  PropositoCard,
  MetaTags
} from '../../components'
import {
  dinosaurioIcon,
  dadosIcon,
  cuadernoIcon,
  nubeIcon
} from '../../assets/iconos'
import { m } from 'framer-motion'
import './SomosPage.css'

const SomosPage = () => {
  return (
    <>
      <MetaTags
        title='Quiénes Somos | Colegio Particular Inmaculada Concepción de María'
        content='Bienvenidos al Colegio Inmaculada Concepción de María,
         donde enseñamos con amor y cultivamos valores
        sólidos, que forman la base de nuestra comunidad escolar, Inmaculada
        Concepción de María es más que una escuela, es un hogar escolar
        donde cada niño se siente valorado y apoyado, para aprender y prosperar
         en un ambiente de cuidado y compromiso.'
      />

      <div className='somosPage'>
        <HeroLayout titulo='Quiénes Somos' />
        <div className='somosPageContent'>
          <Globo colorClaro='#FF9075' className='globoSP' />
          <img
            src={dinosaurioIcon}
            alt='icono de dinosaurio'
            className='dinosaurioSP'
          />
          <ImagenCuadroLayout
            imagen={imagenPrueba}
            alt='imagen de historia'
            texto='La década de 1970 marcó un hito significativo para la
          institución con la construcción de un impresionante edificio
          que albergaría las aulas de secundaria. Los alumnos, vestidos
          con sus característicos uniformes, recorrían los pasillos
          llenos de historias de esfuerzo y dedicación. Las paredes de
          las aulas resonaban con la risa de los estudiantes y la sabiduría impartida por una destacada plantilla de profesores comprometidos.
          En los años 80, el Colegio San Rafael se destacó no solo por
          su excelencia académica, sino también por su participación activa
          en actividades culturales y deportivas. Los trofeos en las
          vitrinas eran testimonio de los logros en torneos intercolegiales,
          mientras que los festivales de arte y música proporcionaban
          un escenario para que los jóvenes talentos florecieran
          ransformando las metodologías educativas y preparando a los
          estudiantes para los desafíos del siglo XXI. La biblioteca del
          colegio se convirtió en un centro de innovación, con acceso
          a recursos digitales y programas educativos avanzados que
          enriquecieron la experiencia de aprendizaje..
          ransformando las metodologías educativas y preparando a los
          estudiantes para los desafíos del siglo XXI. La biblioteca del
          colegio se convirtió en un centro de innovación, con acceso
          a recursos digitales y programas educativos avanzados que
          enriquecieron la experiencia de aprendizaje.
          ransformando las metodologías educativas y preparando a los
          estudiantes para los desafíos del siglo XXI. La biblioteca del
          colegio se convirtió en un centro de innovación, con acceso
          a recursos digitales y programas educativos avanzados que
          enriquecieron la experiencia de aprendizaje.'
          />

        </div>
        <Seccion
          claseAdicional='stylesMisionYVision wavesStyles'
          wavesTopOpacity
        >
          <PropositoCard
            checkColor='checkAmarillo'
            titulo='Misión'
            borderColor='borderAmarillo'
            texto='Inmaculada Concepción de María, es una institución educativa
          que forma integralmente a niños y jóvenes, que estudian es
          post de la calidad de la educación académica y en valores cristianos.'
          />
          <PropositoCard
            checkColor='checkCeleste'
            titulo='Visión'
            borderColor='borderCeleste'
            texto='En los próximos años deseamos ser la mejor institución de
          calidad educativa que tenga el distrito, con alumnos que son la
           razón de ser de nuestra institución.'
          />
        </Seccion>
        <div className='directivaContent'>
          <m.span
            className='dadoContent'
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
          <m.span
            className='dadoContent2'
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
              duration: 0.5
            }}
          >

            <img src={cuadernoIcon} alt='icono de un cuaderno' />
          </m.span>

          <img
            src={nubeIcon}
            alt='icono de nube'
            className='nubeIcon'
          />
          <h2 className='directivaTitulo'>
            Plana Directiva
            <Raya />
          </h2>
          <p className='directivaTexto'>
            La Directiva del Colegio Inmaculada Concepción de María,
            comprometida y sabia, lidera con determinación hacia la
            excelencia educativa. Su visión clara y compromiso sólido
            crean un entorno propicio para el éxito académico y el
            crecimiento personal.
          </p>
          <div className='directivaContenedor'>
            <DirectivaCard
              imagen={imagenPrueba}
              alt='imagen prueba'
              nombre='Juan Torres Garcia'
              cargo='Director'
              ejeX={200}
            />
            <DirectivaCard
              imagen={imagenPrueba}
              alt='imagen prueba'
              nombre='Juan Torres Garcia'
              cargo='Director'
              ejeX={200}
              delay={0.3}
            />
            <DirectivaCard
              imagen={imagenPrueba}
              alt='imagen prueba'
              nombre='Juan Torres Garcia'
              cargo='Director'
              ejeX={200}
              delay={0.4}
            />
          </div>
        </div>
      </div>
    </>
  )
}
export default SomosPage
