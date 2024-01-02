import { SeccionPortadaImagen } from '../../layouts/SeccionPortadaImagen/SeccionPortadaImagen'
import { SeccionValores } from '../../layouts/SeccionValores/SeccionValores'
import './Main.css'
import { Boton } from '../../components/Boton/Boton'
import { Raya } from '../../components/Raya/Raya'
import { Seccion } from '../../components/Seccion/Seccion'
import { Tabs } from '../../components/Tabs/Tabs'
import { Noticia } from '../../components/Noticia/Noticia'
import { Globo } from '../../components/Globo/Globo'
import pergamino from '../../assets/imagenes/pergamino.png'
import astronautaIcon from '../../assets/iconos/astronautaIcon.png'
import coheteIcon from '../../assets/iconos/coheteIcon.svg'

const imagenPrueba = 'https://img.freepik.com/foto-gratis/diversos-ninos-leyendo-libros_53876-146406.jpg?w=740&t=st=1702757210~exp=1702757810~hmac=a03d2e35488e6b4e99c3590bf2e57e6f3284c52221a48c3ac6d3716df9303066'

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
          <div className='imagenHistoria'>
            <img src={pergamino} alt='Imagen de Insignia Antigua' />
          </div>
          <div className='textoHistoria'>
            <h2 className='nuestraHistoria'>
              Nuestra Historia:
              <Raya />
            </h2>
            <h2 className='compromiso'>
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
              redireccion='#'
            />
          </div>
        </div>
      </Seccion>

      <Seccion claseAdicional='stylesNiveles wavesStyles' waves>
        <div className='contenedorNiveles'>
          <h2>Nuestros Niveles <Raya /></h2>
          <p>
            En Inmaculada Concepción de María, ofrecemos una
            educación excepcional en dos niveles clave: preescolar
            y primaria. Adaptamos nuestro enfoque a cada etapa
            del desarrollo, brindando a los estudiantes una base
            sólida para su éxito académico y personal.
          </p>
          <Tabs />
        </div>
      </Seccion>

      <Seccion>
        <div className='contenedorFotos'>
          <h2>
            Nuestra Galería de Fotos
            <Raya />
          </h2>
          <div className='fotos'>
            <div className='foto1'>
              <img src='https://img.freepik.com/foto-gratis/diversos-ninos-leyendo-libros_53876-146406.jpg?w=740&t=st=1702757210~exp=1702757810~hmac=a03d2e35488e6b4e99c3590bf2e57e6f3284c52221a48c3ac6d3716df9303066' alt='' />
            </div>
            <div className='foto2'>
              <img src='https://img.freepik.com/foto-gratis/lindo-grupo-amigos-preescolar-tirados-pasto-sonriendo-pasando-buen-rato-juntos_662251-1782.jpg?w=1060&t=st=1702757866~exp=1702758466~hmac=58da28ec4e618e8f52848276403f82436f48f2d3e14ebace2747f8c84083acac' alt='' />
            </div>
            <div className='foto3'>
              <img src='https://img.freepik.com/foto-gratis/grupo-ninos-pizarra_23-2148107413.jpg?w=1060&t=st=1702757905~exp=1702758505~hmac=45ce7b70c66c8e90a416348a05329ea1a80e179298f727f7d9fc8d8084dfc06a' alt='' />
            </div>
            <div className='foto4'>
              <img src='https://img.freepik.com/foto-gratis/ninos-tiro-medio-sentados-juntos-mesa_23-2149355251.jpg?w=1060&t=st=1702757932~exp=1702758532~hmac=66ba73a128435865b0a9596ee8997bc3401f2b38cc9d42d18f133166d29422eb' alt='' />
              <a className='verMasFotos' href='#'>...</a>
            </div>
          </div>
        </div>
      </Seccion>

      <Seccion claseAdicional='stylesLlamanos wavesStyles' wavesReverse>
        <Globo colorClaro='#7DCCC6' className='globo3' />
        <img src={astronautaIcon} alt='icono de astronauta' className='astronautaIcon' />
        <img src={coheteIcon} alt='icono de cohete' className='coheteIcon' />
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
            <Noticia
              imagen={imagenPrueba}
              altImagen='Imagen de la Noticia'
              fecha='Septiembre 22, 2024'
              titulo=' Lorem ipsum dolor sit amet, consectr adipiscing elit. our'
              redireccion='#'
            />
            <Noticia
              imagen={imagenPrueba}
              altImagen='Imagen de la Noticia'
              fecha='Septiembre 22, 2024'
              titulo=' Lorem ipsum dolor sit amet, consectr adipiscing elit. our'
              redireccion='#'
            />
            <Noticia
              imagen={imagenPrueba}
              altImagen='Imagen de la Noticia'
              fecha='Septiembre 22, 2024'
              titulo=' Lorem ipsum dolor sit amet, consectr adipiscing elit. our'
              redireccion='#'
            />
          </div>
        </div>
      </Seccion>

    </main>

  )
}
