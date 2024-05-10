import { useState } from 'react'
import { IoClose } from 'react-icons/io5'

export const useAlert = () => {
  const [confirm, setConfirm] = useState(null)
  const onCancel = () => {
    setConfirm('no')
  }
  const onConfirm = () => {
    setConfirm('si')
  }
  return {
    Alert: ({ setAlertView }) => (
      <div className='containerBody'>
        <div className='alertContainer'>
          <IoClose />
          <span>
            <p className='alertTitle'>¿Esta seguro de eliminar este elemento?</p>
            <p>Si elimina el elemento no podrá recuperarlo</p>
          </span>
          <div className='alertBotonesContainer'>
            <button
              type='button'
              onClick={() => {
                setAlertView(false)
                onCancel()
              }}
            >Cancelar
            </button>
            <button
              type='button'
              onClick={() => {
                setAlertView(false)
                onConfirm()
              }}
            >Eliminar
            </button>
          </div>
        </div>
      </div>
    ),
    confirm
  }
}
