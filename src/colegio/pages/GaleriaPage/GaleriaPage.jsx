import { HeroLayout } from '../../layouts/HeroLayout/HeroLayout'
import { MetaTags, Galeria } from '../../components'
import './GaleriaPage.css'

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
            <Galeria />
          </div>
        </div>
      </div>
    </>
  )
}
export default GaleriaPage
