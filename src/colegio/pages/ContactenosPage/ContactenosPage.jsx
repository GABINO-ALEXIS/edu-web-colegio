import {
  FaFacebookF,
  FaWhatsapp,
  FaXTwitter
} from 'react-icons/fa6'
import {
  ubicacionIcon,
  telefonoIcon,
  globosIcon,
  dinosaurioIcon,
  insignia
} from '../../assets/iconos'
import {
  Cuadro,
  RedSocial,
  Formulario,
  MetaTags
} from '../../components'
import { HeroLayout } from '../../layouts'
import './ContactenosPage.css'

const ContactenosPage = () => {
  return (
    <>
      <MetaTags
        title='Contáctenos | Colegio Particular Inmaculada Concepción de María'
        content='Bienvenidos al Colegio Inmaculada Concepción de María,
         donde enseñamos con amor y cultivamos valores
        sólidos, que forman la base de nuestra comunidad escolar, Inmaculada
        Concepción de María es más que una escuela, es un hogar escolar
        donde cada niño se siente valorado y apoyado, para aprender y prosperar
         en un ambiente de cuidado y compromiso.'
      />
      <div className='contactenosPage'>
        <HeroLayout titulo='Contáctenos' />
        <div className='mapaContent'>
          mapa
        </div>
        <div className='formularioContactoContent'>
          <img
            src={globosIcon}
            alt='icono de globos'
            className='globoCP'
          />
          <div className='formularioContactoSub'>
            <img
              src={dinosaurioIcon}
              alt='icono de dinosaurio'
              className='dinosaurioCP'
            />
            <Cuadro
              clasesCuadro='formularioContactoCuadro'
              clasesRayas='formularioContactoRayas'
            >
              <p className='descripcionContacto'>
                ¿Necesitas ayuda? Ponte en contacto con nosotros
                vía telefónica o envíanos un mensaje a través del
                formulario que se muestra.
              </p>
              <div className='redSocialContent'>
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
              </div>
              <div>
                <span className='informacionContacto'>
                  <img
                    src={ubicacionIcon}
                    alt='icono de ubicación'
                  />
                  Calle Bélgica MZ B LTE 17-18 AA.HH.
                  Los Olivos de la Paz,  Pachacútec.
                </span>
                <span className='informacionContacto'>
                  <img
                    src={telefonoIcon}
                    alt='icono de telefono'
                  />
                  123456789
                </span>
              </div>
              <img
                src={insignia}
                alt='imagen de la insignia del colegio'
                className='insigniaContacto'
              />
            </Cuadro>
            <Cuadro clasesCuadro='camposContactoContent'>
              <Formulario />
            </Cuadro>
          </div>
        </div>
      </div>
    </>
  )
}
export default ContactenosPage
