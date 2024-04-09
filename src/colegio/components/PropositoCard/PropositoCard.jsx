import { IoIosCheckmarkCircle } from 'react-icons/io'
import { Cuadro } from '../'
import './PropositoCard.css'

export const PropositoCard = ({ checkColor, titulo, texto, borderColor }) => {
  return (
    <Cuadro
      clasesRayas={borderColor}
      clasesCuadro='propositoCard'
    >
      <div className='checkIcon'>
        <IoIosCheckmarkCircle className={checkColor} />
      </div>
      <div className='propositoTextContent'>
        <p className='propositoTitulo'>{titulo}</p>
        <p className='propositoText'>
          {texto}
        </p>
      </div>
    </Cuadro>
  )
}
