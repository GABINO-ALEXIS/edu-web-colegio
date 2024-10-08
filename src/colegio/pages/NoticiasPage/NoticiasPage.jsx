import { MetaTags, Noticias } from '../../components'
import { HeroLayout } from '../../layouts'
import './NoticiasPage.css'

const NoticiasPage = () => {
  return (
    <>
      <MetaTags
        title='Noticias | Colegio Particular Inmaculada Concepción de María'
        content='Bienvenidos al Colegio Inmaculada Concepción de María,
         donde enseñamos con amor y cultivamos valores
        sólidos, que forman la base de nuestra comunidad escolar, Inmaculada
        Concepción de María es más que una escuela, es un hogar escolar
        donde cada niño se siente valorado y apoyado, para aprender y prosperar
         en un ambiente de cuidado y compromiso.'
      />
      <div className='noticiasPage'>
        <HeroLayout titulo='Noticias' />
        <div className='noticiasContent'>
          <Noticias />
        </div>
      </div>
    </>
  )
}

export default NoticiasPage
