import { IoClose } from 'react-icons/io5'
import './Alert.css'

export const Alert = ({ confirm, denied }) => {
  return (
    <div className='containerBody'>
      <div className='alertContainer'>
        <IoClose onClick={() => denied()} />
        <span>
          <p className='alertTitle'>¿Esta seguro de eliminar este elemento?</p>
          <p>Si elimina el elemento no podrá recuperarlo</p>
        </span>
        <div className='alertBotonesContainer'>
          <button
            type='button'
            onClick={() => denied()}
          >Cancelar
          </button>
          <button
            type='button'
            onClick={() => confirm()}
          >Eliminar
          </button>
        </div>
      </div>
    </div>
  )
}
