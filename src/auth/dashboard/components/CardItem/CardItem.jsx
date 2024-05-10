import { TachoIcon } from '../'
import './CardItem.css'

export const CardItem = ({ id, foto, nombre, ocupacion, setIdItem, mostrarAlert }) => {
  const onClick = ({ target }) => {
    setIdItem(target.id)
    mostrarAlert()
  }
  return (
    <div className='cardItemContainer'>
      <img src={foto} alt={nombre} />
      <h4>{nombre}</h4>
      <p>{ocupacion}</p>
      <button
        className='btnBorrar'
        type='button'
        onClick={onClick}
        id={id}
      >
        <span className='spanTexto'>
          Borrar
        </span>
        <span
          className='btnTachoIcon'
        >
          <TachoIcon />
        </span>
      </button>
    </div>
  )
}
