import './SeccionTituloImagen.css'
import imagenPortada from '../../assets/imagenes/niña-pizarra.png'
import mundoIcon from '../../assets/iconos/mundoIcon.svg'
import mundoIcon2 from '../../assets/iconos/mundoIcon2.svg'
import manchaRojaIcon from '../../assets/iconos/manchaRoja.svg'
import rayaIcon from '../../assets/iconos/rayaIcon.svg'
import estrella from '../../assets/iconos/estrellaIcon.svg'
export const SeccionPortadaImagen = () => {
  return (
    <section className='contenedorPortadaI'>

      <div className='cajaTitulos'>
        <img src={estrella} className='estrellaIcon' alt='icono de estrella' />
        <img src={manchaRojaIcon} className='manchaRojaIcon manchaRojaIcon2' alt='icono de mancha' />
        <h1 className='bienvenidos'>Bienvenidos al Colegio Inmaculada Concepción de María</h1>
        <h2 className='educando'><span>Educando</span> con Pasión y <span>Compromiso</span></h2>
        <img src={rayaIcon} className='rayaIcon' alt='icono de raya' />
        <img src={mundoIcon2} className='svgMundo2' alt='icono de tierra' />
        <img src={estrella} className='estrellaIcon3' alt='icono de estrella' />
        <img src={estrella} className='estrellaIcon3 estrellaIcon4' alt='icono de estrella' />
      </div>

      <div className='cajaImagen'>
        <img src={estrella} className='estrellaIcon estrellaIcon5' alt='icono de estrella' />
        <div className='imagen'>
          <img src={imagenPortada} alt='Niña Pegando dibujos en la pizarra' />
        </div>
        <img src={mundoIcon} className='svgMundo' alt='icno de tierra' />
        <img src={manchaRojaIcon} className='manchaRojaIcon' alt='icono de mancha' />
        <img src={estrella} className='estrellaIcon estrellaIcon2' alt='icono de estrella' />
      </div>

    </section>
  )
}
