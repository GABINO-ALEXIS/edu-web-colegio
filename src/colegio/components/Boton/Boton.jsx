import { Link } from 'react-router-dom'
import './Boton.css'

export const Boton = ({ colorBorde, colorFondo, texto, redireccion }) => {
  const Color = () => {
    const colorMap = {
      'negro-amarillo': 'negroAmarillo',
      'blanco-negro': 'blancoNegro',
      'negro-blanco': 'negroBlanco'
    }

    return colorMap[`${colorBorde}-${colorFondo}`] || ''
  }

  return (
    <Link
      className={`CBoton ${Color()}`}
      to={redireccion}
    >
      <div className='leer'>{texto}</div>
    </Link>
  )
}
