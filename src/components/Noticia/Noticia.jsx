import './Noticia.css'
import flechaIcon from '../../assets/iconos/flechaIcon.svg'
export const Noticia = ({ imagen, altImagen, fecha, titulo, redireccion }) => {
  return (
    <div className='cajaNoticia'>
      <div className='imagenNoticia'>
        <img src={imagen} alt={altImagen} />
      </div>
      <p>
        {fecha}
      </p>
      <h3>
        {titulo}
      </h3>
      <a href={redireccion} className='verMasNoticias'>
        Leer más <img src={flechaIcon} alt='Icono de flecha' />
      </a>
    </div>
  )
}
