import './RedSocial.css'

export const RedSocial = ({ icono, colorFondo, redireccion }) => {
  return (
    <div className='contorno'>
      <a href={redireccion} className={`redSocial ${colorFondo}`}>
        {icono}
      </a>
    </div>
  )
}
