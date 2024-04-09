import {
  HeroLayout,
  ImagenCuadroLayout
} from '../../layouts'
import { imagenPrueba } from '../../assets/imagenes'
import { Globo, MetaTags } from '../../components'

import './HistoriaPage.css'

const HistoriaPage = () => {
  return (
    <>
      <MetaTags
        title='Historia | Colegio Particular Inmaculada Concepción de María'
        content='Descubre la fascinante historia del Colegio Inmaculada Concepción de María,
         desde su fundación hasta el presente. Conoce nuestros hitos importantes,
         nuestra herencia y nuestra visión para el futuro.'
      />
      <div className='historiaPage'>
        <HeroLayout titulo='Nuestra Historia' />
        <div className='historiaPageContent'>
          <Globo colorClaro='#7DCCC6' className='globoHP' />
          <Globo colorClaro='#FF9075' className='globoHP2' />

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
      </div>
    </>
  )
}

export default HistoriaPage
