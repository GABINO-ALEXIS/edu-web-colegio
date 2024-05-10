import './Prueba.css'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'

export const Prueba = () => {
  return (
    <div className='containerTT'>
      <div className='containerNotificacion success'>
        <div className='iconNotificacion'>
          <IoIosCheckmarkCircle />
        </div>
        <div className='contentNotificacion'>
          <div className='title'>titulo</div>
          <span>texto</span>
        </div>
        <div className='iconNotificacion'>
          <IoClose />
        </div>
      </div>
      <button>click</button>
    </div>
  )
}
