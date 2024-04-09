import { MetaTags, Noticia } from '../../components'
import { HeroLayout } from '../../layouts'
import { imagenPrueba } from '../../assets/imagenes'
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
          <Noticia
            imagen={imagenPrueba}
            altImagen='Imagen de la Noticia'
            fecha='Septiembre 22, 2024'
            contenido=' Lorem ipsum dolor sit amet, consectr adipiscing elit. our'
          />
          <Noticia
            imagen={imagenPrueba}
            altImagen='Imagen de la Noticia'
            fecha='Septiembre 22, 2024'
            contenido='Lorem ipsum dolor sit amet, consectr adipiscing elit. our'
          />
          <Noticia
            imagen={imagenPrueba}
            altImagen='Imagen de la Noticia'
            fecha='Septiembre 22, 2024'
            contenido='Lorem ipsum dolor sit amet, consectr adipiscing elit. our'
          />
          <Noticia
            imagen={imagenPrueba}
            altImagen='Imagen de la Noticia'
            fecha='Septiembre 22, 2024'
            contenido='Lorem ipsum dolor sit amet, consectr adipiscing elit. sit amet, consectr adipiscing elisit amet, consectr adipiscing elisit amet, consectr adipiscing elisit amet, consectr adipiscing eliour'
          />
          <Noticia
            imagen={imagenPrueba}
            altImagen='Imagen de la Noticia'
            fecha='Septiembre 22, 2024'
            contenido='Lorem ipsum dolor sit amet, consectr adipiscing rem ipsum dolor sit amet, consectr adipiscing elrem ipsum dolor sit amet, consectr adipiscing elrem ipsum dolor sit amet, consectr adipiscing elrem ipsum dolor sit amet, consectr adipiscing elrem ipsum dolor sit amet, consectr adipiscing elrem ipsum dolor sit amet, consectr adipiscing elrem ipsum dolor sit amet, consectr adipiscing elrem ipsum dolor sit amet, consectr adipiscing elrem ipsum dolor sit amet, consectr adipiscing elrem ipsum dolor sit amet, consectr adipiscing elrem ipsum dolor sit amet, consectr adipiscing elelit. our'
          />
        </div>
      </div>
    </>
  )
}

export default NoticiasPage
