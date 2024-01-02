import { RedSocial } from '../../components/RedSocial/RedSocial'
import { FaFacebookF, FaWhatsapp, FaXTwitter } from 'react-icons/fa6'
import insignia from '../../assets/iconos/insignia.png'
import ubicacionIcon from '../../assets/iconos/ubicacionIcon.svg'
import telefonoIcon from '../../assets/iconos/telefonoIcon.svg'
import cartaIcon from '../../assets/iconos/cartaIcon.svg'
import gatoIcon from '../../assets/iconos/gatoIcon.svg'
import estrellaIcon from '../../assets/iconos/tresEstrellasIcon.svg'
import './Footer.css'
import { WavesTop } from '../../components/WavesTop/WavesTop'

export const Footer = () => {
  return (
    <footer>
      <WavesTop />
      <div className='informacionFooter'>
        <ul className='gatoIcon'>
          <img src={gatoIcon} alt='icono de gato' />
        </ul>

        <ul className='uneteColegio'>
          <li className='imagenInsigniaC'>
            <img src={insignia} alt='Insignia del Colegio' />
          </li>
          <li>
            Únete a nuestro colegio Inmaculada Concepción de María,
            para una experiencia educativa única. ¡Inscríbete ahora
            y forma parte de nuestra comunidad educativa!
          </li>
          <li>
            <RedSocial
              icono={<FaFacebookF />}
              colorFondo='azul'
              redireccion='#'
            />
            <RedSocial
              icono={<FaWhatsapp />}
              colorFondo='verde'
              redireccion='#'
            />
            <RedSocial
              icono={<FaXTwitter />}
              colorFondo='negro'
              redireccion='#'
            />
          </li>
        </ul>

        <ul className='contactos'>
          <h3>Contactos</h3>
          <li>
            <img src={ubicacionIcon} alt='icono de ubicación' />
            Calle Bélgica MZ B LTE 17-18 AA.HH.  Los Olivos de la Paz,  Pachacútec.
          </li>
          <li>
            <img src={telefonoIcon} alt='icono de telefono' />
            123456789
          </li>
          <li>
            <img src={cartaIcon} alt='icono de carta' />
            correo@gmail.com
          </li>
        </ul>

        <ul className='enlacesRapido'>
          <h3>Enlaces Rápidos</h3>
          <a href='#'><li>Inicio</li></a>
          <a href='#'><li>Nosotros</li></a>
          <a href='#'><li>Admisión</li></a>
          <a href='#'><li>Niveles</li></a>
          <a href='#'><li>Propuesta Educativa</li></a>
          <a href='#'><li>Contátenos</li></a>
        </ul>

        <ul className='tresEstrellasIcon'>
          <img src={estrellaIcon} alt='icono de estrella' />
        </ul>
      </div>
      <div className='derechos'>
        <div className='custom-shape-divider-top-1703296992'>
          <svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
            <path d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z' className='shape-fill' />
          </svg>
        </div>
        © 2023 Gabino Cisneros Alexis. Todos los derechos reservados
      </div>
    </footer>
  )
}
