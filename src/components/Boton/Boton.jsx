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
    <a className={`CBoton ${Color()}`} href={redireccion}>
      <div className='leer'>{texto}</div>
    </a>
  )
}
