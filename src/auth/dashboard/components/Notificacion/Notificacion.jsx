import { IoIosCheckmarkCircle } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'
import { MdOutlineError } from 'react-icons/md'
import './Notificacion.css'

export const Notificacion = ({ type, titulo, texto, desmontar }) => {
  const iconos = {
    success: <IoIosCheckmarkCircle />,
    error: <MdOutlineError />
  }

  return (

    <div className={`containerNotificacion ${type}`}>
      <div className='iconNotificacion'>
        {iconos[type]}
      </div>
      <div className='contentNotificacion'>
        <div className='title'>{titulo}</div>
        <span>{texto}</span>
      </div>
      <div className='iconNotificacion'>
        <IoClose onClick={desmontar} />
      </div>
    </div>

  )
}
