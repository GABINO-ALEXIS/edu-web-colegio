import { Boton } from '../Boton/Boton'
import './Card.css'
import lapizIcon from '../../assets/iconos/lapizIcon.svg'

export const Card = ({ titulo1, titulo2, titulo3, img, altImagen }) => {
  return (
    <div className='contenedorCard'>

      <div className='imagenCard'>
        <img src={img} alt={altImagen} />
      </div>

      <div className='descripcionCard'>
        <h3>
          <img src={lapizIcon} alt='Icono de lapiz' />
          {titulo1}
        </h3>
        <p>
          Conoce nuestro programa de preescolar, que se centra en el desarrollo
          temprano de habilidades cognitivas, sociales y motoras.
        </p>
        <h3>
          <img src={lapizIcon} alt='Icono de lapiz' />
          {titulo2}
        </h3>
        <p>
          Aceptamos estudiantes en edades de 3 a 5 años.
        </p>
        <h3>
          <img src={lapizIcon} alt='Icono de lapiz' />
          {titulo3}
        </h3>
        <p>
          Nuestro horario típico de preescolar y las opciones
          de tiempo completo y medio tiempo.
        </p>
        <Boton
          colorBorde='blanco'
          colorFondo='negro'
          texto='Leer más'
          redireccion='#'
        />
      </div>

    </div>
  )
}
