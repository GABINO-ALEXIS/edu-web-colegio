import './ValorItem.css'

export const ValorItem = ({ mundoIcon, sticker, titulo, descripcion, altImagen }) => {
  return (
    <div
      className='cajaDescripcion'
    >
      <div className='cajaCirculo'>
        <img src={mundoIcon} className='mundoIconos' alt='icono de mundo' />
        <div className='circulo'>
          <img src={sticker} className='arteIcon' alt={altImagen} />
        </div>
      </div>
      <div className='cajaLetras'>
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
      </div>
    </div>
  )
}
